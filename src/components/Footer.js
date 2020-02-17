import React from 'react';
import Button from './Button';
import MoneyLabel from './MoneyLabel';

const Footer = ({money, goToShop}) => {
  return (
    <>
      <div className="footer">
        <Button
          title="Shop"
          className="shop-button"
          goToShop={goToShop}
        />
        <MoneyLabel
          money={money}
        />
      </div>
    </>
  );
};

export default Footer;
