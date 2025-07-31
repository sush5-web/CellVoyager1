# CellVoyager1

# 🚀 CellVoyager: Simulate Human Cell Behavior in Space

CellVoyager is an AI-powered simulation tool that models how human cells behave in space conditions like microgravity and radiation. Built for BioHack 2025, it helps students and researchers explore space biology in an interactive, educational format.

---

## 🌌 Features

- Simulate **gene expression changes** under space exposure
- Predict **cell fate** (e.g., viability, apoptosis)
- Model **protein expression levels** based on cell type
- Score **DNA repair efficiency**
- Predict **stem cell differentiation** outcomes

---

## 🧠 Tech Stack

**Frontend**  
- React.js + Vite  
- Plain CSS (soon: glassmorphism UI)  
- REST API integration

**Backend**  
- FastAPI  
- Pydantic schema validation  
- Placeholder AI logic (can be replaced with trained models)

---

## 🧪 Getting Started

### Clone and Run Backend

cd CellVoyager/backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
uvicorn app:app --reload
API available at: http://localhost:8000


cd ../frontend
npm install
npm run dev
App available at: http://localhost:5173

📂 Project Structure

CellVoyager1/
├── backend/
│   └── app.py
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       └── components/
│           └── InputPanel.jsx
📬 API Endpoints
Method	Endpoint	Description
POST	/simulate/gene_expression	Simulate gene behavior
POST	/simulate/cell_fate	Predict apoptosis/viability
POST	/simulate/protein_expression	Output protein expression levels
POST	/simulate/dna_repair	Score DNA repair efficiency
POST	/simulate/stem_cell	Predict stem cell lineage