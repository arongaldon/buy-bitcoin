const translations = {
    en: {
        title: "Bitcoin Buy Score",
        subtitle: "Analyze real-time indicators to make the best decision.",
        buy_readiness: "Buy Readiness",
        
        // Cards
        psychology_title: "Psychology & Sentiment",
        onchain_title: "On-Chain Health",
        technical_title: "Technical Analysis & Cycles",
        macro_title: "Macro & Flows",

        // Fear & Greed
        fng_title: "Fear & Greed Index",
        fng_desc: "The market is emotional. Buy in extreme fear (< 25), avoid in greed (> 75).",
        fng_buy: "Fear (<25)",
        fng_neutral: "Neutral",
        fng_risk: "Greed (>75)",

        // Liquidations
        liq_title: "Liquidation Map",
        liq_desc: "Cascades of long liquidations usually mark the bottom of a drop.",
        liq_buy: "Liq. Longs",
        liq_neutral: "Neutral",
        liq_risk: "Liq. Shorts",

        // MVRV
        mvrv_title: "MVRV Z-Score",
        mvrv_desc: "Z-Score < 0 indicates undervaluation. Z-Score > 7 indicates an impending bubble.",
        mvrv_buy: "Green (<0)",
        mvrv_neutral: "Mid",
        mvrv_risk: "Red (>7)",

        // Reserves
        reserves_title: "Exchange Reserves",
        reserves_desc: "Less BTC on exchanges = supply shock and long-term accumulation.",
        reserves_buy: "Falling",
        reserves_neutral: "Stable",
        reserves_risk: "Rising",

        // UTXO
        utxo_title: "UTXO Age Bands",
        utxo_desc: "If long-term holders (> 1 year) increase, it usually signals a market bottom.",
        utxo_buy: "Increasing",
        utxo_neutral: "Stable",
        utxo_risk: "Distributing",

        // Halving
        halving_title: "4-Year Cycle & Halving",
        halving_desc: "Price usually bottoms ~477 days before halving and peaks 1.5 years after.",
        halving_buy: "Pre-Halving",
        halving_neutral: "Mid Post-Halving",
        halving_risk: "Peak (1-1.5 yrs)",

        // MA 200
        ma200_title: "200-Week MA",
        ma200_desc: "Touching the MA200 is usually a generational buy. High above is risky.",
        ma200_buy: "Near/Below",
        ma200_neutral: "Mid",
        ma200_risk: "High Above",

        // RSI
        rsi_title: "Weekly RSI",
        rsi_desc: "RSI < 30 indicates extreme oversold (good buy). Bullish crosses at 40-45 start trends.",
        rsi_buy: "Low (<45)",
        rsi_neutral: "Mid",
        rsi_risk: "High (>70)",

        // M2
        m2_title: "Global Liquidity (M2)",
        m2_desc: "M2 in an uptrend is the ideal environment for scarce assets like BTC.",
        m2_buy: "Rising",
        m2_neutral: "Sideways",
        m2_risk: "Falling",

        // DXY
        dxy_title: "US Dollar Index (DXY)",
        dxy_desc: "Dollar falling = Fuel for BTC rally. Dollar rising = Risk.",
        dxy_buy: "Falling",
        dxy_neutral: "Sideways",
        dxy_risk: "Rising",

        // ETF
        etf_title: "ETF Flows",
        etf_desc: "Daily inflows > $100M confirm institutional buying and drain supply.",
        etf_buy: "Inflows",
        etf_neutral: "Mixed",
        etf_risk: "Outflows",

        // Footer
        footer_title: "Strategic Recommendation: DCA",
        footer_desc: "Since there is no 'perfect moment', the most effective risk-mitigation strategy is Dollar Cost Averaging (DCA): invest fixed amounts regularly to smooth the entry price, increasing the amount only when indicators signal 'Fear' or 'Undervaluation'.",

        // Dynamic Recommendations
        rec_strong_buy: "Maximum Opportunity Scenario",
        rec_buy: "Good time to buy",
        rec_neutral: "Neutral / Consolidation",
        rec_sell: "Moderate Risk",
        rec_strong_sell: "Risk Scenario - Avoid buying",

        // Auto Labels
        auto_label: "Auto"
    },
    es: {
        title: "Bitcoin Buy Score",
        subtitle: "Analiza los indicadores en tiempo real para tomar la mejor decisión.",
        buy_readiness: "Buy Readiness",
        
        // Cards
        psychology_title: "Psicología y Sentimiento",
        onchain_title: "Salud de la Red (On-Chain)",
        technical_title: "Análisis Técnico y Ciclos",
        macro_title: "Macro y Flujos",

        // Fear & Greed
        fng_title: "Fear & Greed Index",
        fng_desc: "El mercado es emocional. Comprar en miedo extremo (< 25), evitar en codicia (> 75).",
        fng_buy: "Miedo (<25)",
        fng_neutral: "Neutral",
        fng_risk: "Codicia (>75)",

        // Liquidations
        liq_title: "Mapa de Liquidaciones",
        liq_desc: "Cascadas de liquidaciones Long suelen marcar el suelo de una caída.",
        liq_buy: "Liq. Longs",
        liq_neutral: "Neutral",
        liq_risk: "Liq. Shorts",

        // MVRV
        mvrv_title: "MVRV Z-Score",
        mvrv_desc: "Z-Score < 0 indica infravaloración. Z-Score > 7 indica burbuja inminente.",
        mvrv_buy: "Verde (<0)",
        mvrv_neutral: "Medio",
        mvrv_risk: "Rojo (>7)",

        // Reserves
        reserves_title: "Reservas en Exchanges",
        reserves_desc: "Menos BTC en exchanges = choque de oferta y acumulación a largo plazo.",
        reserves_buy: "Bajando",
        reserves_neutral: "Estable",
        reserves_risk: "Subiendo",

        // UTXO
        utxo_title: "Bandas de Edad UTXO",
        utxo_desc: "Si los 'holders' a largo plazo (> 1 año) aumentan, suele señalar un mínimo de mercado.",
        utxo_buy: "Aumentando",
        utxo_neutral: "Estable",
        utxo_risk: "Distribución",

        // Halving
        halving_title: "Ciclo de 4 Años y Halving",
        halving_desc: "El precio suele tocar fondo unos 477 días antes del halving y alcanzar el pico 1.5 años después.",
        halving_buy: "Pre-Halving",
        halving_neutral: "Post-Halving Medio",
        halving_risk: "Pico (1-1.5 años)",

        // MA 200
        ma200_title: "MA 200 Semanas",
        ma200_desc: "Tocar la MA200 suele ser compra generacional. Muy por encima es riesgo.",
        ma200_buy: "Cerca/Debajo",
        ma200_neutral: "Medio",
        ma200_risk: "Muy Arriba",

        // RSI
        rsi_title: "RSI Semanal",
        rsi_desc: "RSI < 30 indica sobreventa extrema (buena compra). Cruces alcistas en 40-45 inician tendencia.",
        rsi_buy: "Bajo (<45)",
        rsi_neutral: "Medio",
        rsi_risk: "Alto (>70)",

        // M2
        m2_title: "Liquidez Global (M2)",
        m2_desc: "M2 en tendencia ascendente es el entorno ideal para activos escasos como BTC.",
        m2_buy: "Subiendo",
        m2_neutral: "Lateral",
        m2_risk: "Bajando",

        // DXY
        dxy_title: "Índice Dólar (DXY)",
        dxy_desc: "Dólar bajando = Gasolina para el rally de BTC. Dólar subiendo = Riesgo.",
        dxy_buy: "Bajando",
        dxy_neutral: "Lateral",
        dxy_risk: "Subiendo",

        // ETF
        etf_title: "Flujos ETFs",
        etf_desc: "Inflows diarios > $100M confirman compras institucionales y secan la oferta.",
        etf_buy: "Inflows",
        etf_neutral: "Mixtos",
        etf_risk: "Outflows",

        // Footer
        footer_title: "Recomendación Estratégica: DCA",
        footer_desc: "Dado que no existe el 'momento perfecto', la estrategia más efectiva para mitigar riesgos es el Dollar Cost Averaging (DCA): invertir cantidades fijas regularmente para suavizar el precio de entrada, aumentando la cantidad solo cuando los indicadores señalen 'Miedo' o 'Minusvaloración'.",

        // Dynamic Recommendations
        rec_strong_buy: "Escenario de Máxima Oportunidad",
        rec_buy: "Buen momento de compra",
        rec_neutral: "Neutral / Consolidación",
        rec_sell: "Riesgo moderado",
        rec_strong_sell: "Escenario de Riesgo - Evitar compras",

        // Auto Labels
        auto_label: "Auto"
    }
};
