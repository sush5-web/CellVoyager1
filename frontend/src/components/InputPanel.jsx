import { useState } from 'react';

const InputPanel = ({ onSubmit }) => {
  const [input, setInput] = useState({
    cell_type: 'T-cell',
    gravity_level: '0g',
    radiation_level: 2.5,
    space_days: 90,
    stressors: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="input-panel">
      <label>
        Cell Type:
        <select name="cell_type" value={input.cell_type} onChange={handleChange}>
          <option value="T-cell">T-cell</option>
          <option value="Neuron">Neuron</option>
          <option value="Stem cell">Stem cell</option>
        </select>
      </label>
      <label>
        Gravity:
        <select name="gravity_level" value={input.gravity_level} onChange={handleChange}>
          <option value="1g">Earth</option>
          <option value="0.3g">Mars</option>
          <option value="0g">Zero Gravity</option>
        </select>
      </label>
      <label>
        Radiation (Gy/day):
        <input
          type="range"
          name="radiation_level"
          min="0"
          max="10"
          step="0.1"
          value={input.radiation_level}
          onChange={handleChange}
        />
        {input.radiation_level} Gy/day
      </label>
      <label>
        Mission Duration (days):
        <input
          type="number"
          name="space_days"
          value={input.space_days}
          onChange={handleChange}
          min="1"
        />
      </label>
      <button type="submit">Simulate 🧪</button>
    </form>
  );
};

export default InputPanel;
