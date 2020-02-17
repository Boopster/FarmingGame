import React from 'react';
import './Button.css';

const Button = ({className, title, goToShop}) => {
  return (
    <button className={className} onClick={goToShop}>{title}</button>
  );
};

export default Button;
