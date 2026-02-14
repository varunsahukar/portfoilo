import React from 'react';
import './PaperCard.css';

const PaperCard = ({ title, description, icon: Icon, rotation = 0 }) => {
  return (
    <div className="paper-card-wrapper" style={{ transform: `rotate(${rotation}deg)` }}>
      <div className="paper-tape"></div>
      <div className="paper-card">
        <div className="paper-content">
          <h3 className="paper-title">{title}</h3>
          {Icon && (
            <div className="paper-icon">
              <Icon size={32} />
            </div>
          )}
          <p className="paper-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;
