document.addEventListener('DOMContentLoaded', () => {
    // There are 11 indicators
    // State map: indicator_id -> value (-1, 0, 1)
    const state = {
        'fear-greed': 0,
        'liquidation': 0,
        'mvrv': 0,
        'reserves': 0,
        'utxo': 0,        // NEW: Bandas de Edad UTXO
        'halving': 0,     // NEW: Ciclo y Halving
        'ma200': 0,
        'rsi': 0,
        'm2': 0,
        'dxy': 0,
        'etf': 0
    };

    const scoreValueEl = document.getElementById('score-value');
    const scoreLabelEl = document.getElementById('score-label');
    const gaugeFillEl = document.getElementById('gauge-fill');
    const recommendationEl = document.getElementById('recommendation');

    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleToggleClick(btn);
        });
    });

    function handleToggleClick(btn) {
        const indicatorId = btn.dataset.indicator;
        const value = parseInt(btn.dataset.value, 10);
        
        // Remove active class from siblings
        const group = btn.closest('.toggle-group');
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked
        btn.classList.add('active');
        
        // Update state
        state[indicatorId] = value;
        
        // Recalculate score
        updateScore();
    }

    function updateScore() {
        // Calculate max possible positive score and max negative score
        // Total indicators = 11. Max score = 11, Min score = -11
        const values = Object.values(state);
        
        let sum = 0;
        values.forEach(v => sum += v);

        // Convert sum (-11 to 11) to percentage (0% to 100%)
        // Formula: (sum + 11) / 22 * 100
        const totalIndicators = 11;
        const percentage = ((sum + totalIndicators) / (totalIndicators * 2)) * 100;
        
        // Update Gauge UI (-45deg to 135deg is a 180deg rotation for the half circle)
        // 0% = -45deg, 100% = 135deg
        const rotation = -45 + (percentage / 100 * 180);
        gaugeFillEl.style.transform = `rotate(${rotation}deg)`;
        
        // Color transition based on percentage
        let color = '#f59e0b'; // Neutral (orange/yellow)
        let recText = 'Neutral / Consolidación';
        
        if (percentage >= 75) {
            color = '#10b981'; // Strong Buy
            recText = 'Escenario de Máxima Oportunidad';
        } else if (percentage >= 60) {
            color = '#34d399'; // Buy
            recText = 'Buen momento de compra';
        } else if (percentage <= 25) {
            color = '#ef4444'; // Strong Sell
            recText = 'Escenario de Riesgo - Evitar compras';
        } else if (percentage <= 40) {
            color = '#f87171'; // Sell
            recText = 'Riesgo moderado';
        }

        gaugeFillEl.style.borderColor = color;
        scoreValueEl.innerText = Math.round(percentage) + '%';
        scoreValueEl.style.color = color;
        recommendationEl.innerText = recText;
        recommendationEl.style.color = color;
    }

    // Initialize UI
    updateScore();

    // Helper to click correct toggle button and add label
    function autoSelectIndicator(indicatorId, value, labelText) {
        const buttons = document.querySelectorAll(`.toggle-btn[data-indicator="${indicatorId}"]`);
        buttons.forEach(btn => {
            if (btn.dataset.value === value.toString()) {
                handleToggleClick(btn);
                const headerTitle = btn.closest('.indicator').querySelector('.indicator-title');
                if (headerTitle) {
                    headerTitle.innerHTML += ` <span style="font-size: 0.75rem; color: #10b981; margin-left: 5px;">(Auto: ${labelText})</span>`;
                }
            }
        });
    }

    // 1. Auto-fetch Fear & Greed Index
    fetch('https://api.alternative.me/fng/')
        .then(response => response.json())
        .then(data => {
            if (data && data.data && data.data.length > 0) {
                const fngValue = parseInt(data.data[0].value, 10);
                let targetValue = 0; // Neutral
                
                if (fngValue < 25) {
                    targetValue = 1; // Buy (Miedo)
                } else if (fngValue > 75) {
                    targetValue = -1; // Risk (Codicia)
                }
                
                autoSelectIndicator('fear-greed', targetValue, fngValue);
            }
        })
        .catch(console.error);

    // 2. Auto-calculate Halving Cycle
    try {
        const lastHalving = new Date('2024-04-19T00:00:00Z');
        const now = new Date();
        const daysSinceHalving = (now - lastHalving) / (1000 * 60 * 60 * 24);
        
        let halvingValue = 0; // Neutral (Post-halving medio)
        let halvingLabel = `${Math.floor(daysSinceHalving)}d post-halving`;

        if (daysSinceHalving < 0) {
            halvingValue = 1; // Buy (Pre-halving)
        } else if (daysSinceHalving > 547) {
            halvingValue = -1; // Risk (Pico 1.5 años después)
        }

        autoSelectIndicator('halving', halvingValue, halvingLabel);
    } catch (error) {
        console.error(error);
    }

    // 3. Auto-calculate MA 200 and RSI via Binance API
    fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1w&limit=200')
        .then(response => response.json())
        .then(klines => {
            if (klines && klines.length > 0) {
                const closes = klines.map(k => parseFloat(k[4]));
                const currentPrice = closes[closes.length - 1];

                // --- MA 200 Calculation ---
                if (closes.length === 200) {
                    const sum = closes.reduce((a, b) => a + b, 0);
                    const ma200 = sum / 200;
                    
                    let maValue = 0; // Neutral
                    if (currentPrice <= ma200 * 1.15) { // Within 15% of MA200 or below
                        maValue = 1; // Buy
                    } else if (currentPrice > ma200 * 2.5) { // More than 2.5x the MA200
                        maValue = -1; // Risk
                    }
                    
                    autoSelectIndicator('ma200', maValue, `$${Math.round(ma200)}`);
                }

                // --- RSI (14 weeks) Calculation ---
                if (closes.length >= 15) {
                    const rsiCloses = closes.slice(-15);
                    let gains = 0;
                    let losses = 0;
                    
                    for (let i = 1; i < rsiCloses.length; i++) {
                        const change = rsiCloses[i] - rsiCloses[i-1];
                        if (change > 0) gains += change;
                        else losses += Math.abs(change);
                    }
                    
                    const avgGain = gains / 14;
                    const avgLoss = losses / 14;
                    
                    let rsi = 100;
                    if (avgLoss > 0) {
                        const rs = avgGain / avgLoss;
                        rsi = 100 - (100 / (1 + rs));
                    }
                    
                    let rsiValue = 0; // Neutral
                    if (rsi < 45) {
                        rsiValue = 1; // Buy
                    } else if (rsi > 70) {
                        rsiValue = -1; // Risk
                    }
                    
                    autoSelectIndicator('rsi', rsiValue, Math.round(rsi));
                }
            }
        })
        .catch(console.error);

});
