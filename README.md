# Bitcoin Buy Score Dashboard

**English** | [Español](README_es.md)

A highly interactive, beautifully designed Single Page Application (SPA) that helps you decide the optimal moment to buy Bitcoin. It analyzes the market across 11 crucial indicators spanning four core pillars: Psychology, On-Chain Health, Technical Analysis, and Macroeconomics.

[Live Demo](https://arongaldon.github.io/buy-bitcoin/)

## 🚀 Features

- **Premium UI/UX:** Built with pure HTML, Vanilla CSS, and JavaScript. Features a dark mode aesthetic with glassmorphism, dynamic animations, and a responsive grid layout.
- **Dynamic Score Engine:** Automatically calculates a "Buy Readiness Score" (0% to 100%) and updates the recommendation gauge in real-time as you interact with the indicators.
- **Automated Real-Time Data Fetching:**
  - **Fear & Greed Index:** Automatically fetched via the `Alternative.me` public API.
  - **MA 200 Weeks & RSI (14w):** Automatically calculated in the browser by fetching the latest weekly kline data from the **Binance Public API**.
  - **Halving Cycle:** Mathematically calculated based on the last halving date (April 19, 2024) to determine the current cycle phase.
- **Manual Overrides & Gated Data:** Includes manual toggle buttons for indicators that are heavily gated by paywalls or CORS restrictions (e.g., Global Liquidity M2, DXY, ETF Flows, MVRV Z-Score, UTXO Age Bands).

## 🛠️ Technology Stack

- **HTML5** for structure
- **Vanilla CSS3** for styling (No frameworks, full control over animations and CSS Grid)
- **Vanilla JavaScript** for logic and API integration
- **APIs Used:** Binance REST API, Alternative.me API

## 🚦 How to Run

Since this is a client-side only application, you don't need any complex build steps or dependencies.

1. Clone the repository.
2. Open the directory in your terminal.
3. Start a simple local web server:

   ```sh
   python3 -m http.server 8080
   ```

4. Open your browser and navigate to `http://localhost:8080`.

## 🧠 The 11 Indicators Evaluated

1. **Fear & Greed Index** (Psychology)
2. **Liquidation Map** (Psychology)
3. **MVRV Z-Score** (On-Chain)
4. **Exchange Reserves** (On-Chain)
5. **UTXO Age Bands** (On-Chain)
6. **4-Year Halving Cycle** (Technical)
7. **200-Week Moving Average** (Technical)
8. **Weekly RSI** (Technical)
9. **Global Liquidity / M2** (Macro)
10. **US Dollar Index / DXY** (Macro)
11. **Institutional ETF Flows** (Macro)

---

**Created by:** [Aron Galdon Gines](https://github.com/arongaldon) using **NotebookLM** and **Antigravity**.
Year 2026

---
*Disclaimer: This dashboard is for educational and informational purposes only. It does not constitute financial advice. Always do your own research (DYOR) and consider using a Dollar Cost Averaging (DCA) strategy to mitigate risks.*
