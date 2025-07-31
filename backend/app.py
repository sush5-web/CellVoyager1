from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SimulationInput(BaseModel):
    cell_type: str
    gravity_level: str
    radiation_level: float
    space_days: int
    stressors: Optional[List[str]] = []

@app.get("/ping")
def ping():
    return {"message": "CellVoyager backend running"}

@app.post("/simulate/gene_expression")
def gene_expression(input: SimulationInput):
    return {
        "genes": {
            "TP53": 0.83,
            "SOD1": 0.61,
            "BAX": 0.92,
            "ATM": 0.78
        }
    }

@app.post("/simulate/cell_fate")
def cell_fate(input: SimulationInput):
    fate = "Apoptotic" if input.radiation_level > 5 else "Viable"
    return {
        "fate": fate,
        "confidence": 0.87 if fate == "Apoptotic" else 0.72
    }

@app.post("/simulate/protein_expression")
def protein_expression(input: SimulationInput):
    return {
        "proteins": {
            "Actin": 0.65,
            "Tubulin": 0.75,
            "Interleukin-6": 0.91,
            "VEGF": 0.62
        }
    }

@app.post("/simulate/dna_repair")
def dna_repair(input: SimulationInput):
    base_score = 100 - input.radiation_level * 6
    repair_score = max(0, min(100, base_score))
    return {
        "repair_efficiency": repair_score,
        "risk_level": "High" if repair_score < 50 else "Low"
    }

@app.post("/simulate/stem_cell")
def stem_cell_prediction(input: SimulationInput):
    lineage = "Neuronal" if input.gravity_level == "0g" else "Muscular"
    return {
        "predicted_lineage": lineage,
        "differentiation_score": 0.79 if lineage == "Neuronal" else 0.84
    }
