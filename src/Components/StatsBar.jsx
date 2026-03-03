import React from 'react';
import './StatsBar.css';

const StatsBar = () => {
  const stats = [
    { number: "+7000", label: "Children Transformed" },
    { number: "+37", label: "Years Experience" },
    { number: "+15", label: "Qualified Teachers" }
  ];

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div key={index} className="stat-item">
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;