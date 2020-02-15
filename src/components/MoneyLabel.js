import React from 'react';
import './MoneyLabel.css';

const MoneyLabel = ({money}) => {
  return (
    <div className="money-label">£{money}</div>
  );
};

export default MoneyLabel;
