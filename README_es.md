# Bitcoin Buy Score Dashboard

[English](README.md) | **Español**

Una aplicación web altamente interactiva y bellamente diseñada para ayudarte a decidir el momento óptimo para comprar Bitcoin. Analiza el mercado a través de 11 indicadores cruciales divididos en cuatro pilares: Psicología, Salud de la Red, Análisis Técnico y Macroeconomía.

[Demo en Vivo](https://arongaldon.github.io/buy-bitcoin/)

## 🚀 Características

- **Interfaz Premium UI/UX:** Construida con HTML puro, CSS Vanilla y JavaScript. Estética de modo oscuro con glassmorphism, animaciones dinámicas y diseño responsivo.
- **Motor de Puntuación Dinámico:** Calcula automáticamente un "Puntaje de Oportunidad de Compra" (0% a 100%) y actualiza el medidor de recomendación en tiempo real.
- **Automatización de Datos en Tiempo Real:**
  - **Índice de Fear & Greed:** Obtenido automáticamente a través de la API pública de `Alternative.me`.
  - **MA 200 Semanas y RSI (14s):** Calculados automáticamente en el navegador descargando datos de la API pública de **Binance**.
  - **Ciclo de Halving:** Evaluación matemática basada en la fecha del último halving (19 de abril de 2024).
- **Controles Manuales para Datos Restringidos:** Incluye selectores manuales para indicadores protegidos por muros de pago o restricciones de CORS (M2, DXY, Flujos de ETFs, MVRV Z-Score, etc.).

## 🛠️ Stack Tecnológico

- **HTML5** para la estructura.
- **Vanilla CSS3** para el diseño (Sin frameworks, control total de animaciones y CSS Grid).
- **Vanilla JavaScript** para la lógica e integración de APIs.
- **APIs Utilizadas:** Binance REST API, Alternative.me API.

## 🚦 Cómo Ejecutar

Al ser una aplicación puramente de cliente, no necesitas pasos de construcción complejos.

1. Clona el repositorio.
2. Abre el directorio en tu terminal.
3. Inicia un servidor web local simple:

   ```sh
   python3 -m http.server 8080
   ```

4. Abre tu navegador y navega a `http://localhost:8080`.

## 🧠 Los 11 Indicadores Evaluados

1. **Fear & Greed Index** (Psicología)
2. **Mapa de Liquidaciones** (Psicología)
3. **MVRV Z-Score** (On-Chain)
4. **Reservas en Exchanges** (On-Chain)
5. **Bandas de Edad UTXO** (On-Chain)
6. **Ciclo de 4 Años y Halving** (Técnico)
7. **Media Móvil de 200 Semanas** (Técnico)
8. **RSI Semanal** (Técnico)
9. **Liquidez Global / M2** (Macro)
10. **Índice del Dólar / DXY** (Macro)
11. **Flujos Institucionales de ETFs** (Macro)

---

**Creado por:** [Arón Galdón Ginés](https://github.com/arongaldon) usando **NotebookLM** y **Antigravity**.
Año 2026

---
*Descargo de responsabilidad: Este tablero es solo para fines educativos e informativos. No constituye asesoramiento financiero. Siempre realiza tu propia investigación (DYOR) y considera usar una estrategia de Dollar Cost Averaging (DCA) para mitigar riesgos.*
