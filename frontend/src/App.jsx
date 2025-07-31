import { useState } from 'react';
import InputPanel from './components/InputPanel';
import './App.css';

function App() {
  const [geneData, setGeneData] = useState(null);

  const runSimulation = async (inputData) => {
    const res = await fetch('http://localhost:8000/simulate/gene_expression', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputData),
    });
    const data = await res.json();
    setGeneData(data.genes);
  };

  return (
    <div className="app">
      <h1>🧬 CellVoyager: Gene Expression Simulator</h1>
      <InputPanel onSubmit={runSimulation} />
      {geneData && (
        <div className="results">
          <h2>📊 Gene Expression Results</h2>
          <ul>
            {Object.entries(geneData).map(([gene, value]) => (
              <li key={gene}>{gene}: {Math.round(value * 100)}%</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
