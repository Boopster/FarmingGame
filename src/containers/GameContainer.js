import React, {useState, useEffect} from 'react';
import Button from '../components/Button';
import MoneyLabel from '../components/MoneyLabel';

const GameContainer = () => {

  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(480);
  const [tileSize, setTileSize] = useState(64);
  const [numTilesX, setNumTilesX] = useState(5);
  const [numTilesY, setNumTilesY] = useState(6);
  const [landLayerW, setLandLayerW] = useState(64*5);
  const [landLayerH, setLandLayerH] = useState(64*6);
  const [controlsLayerW, setControlsLayerW] = useState(64*5);
  const [controlsLayerH, setControlsLayerH] = useState(64*1.5);
  const [costPlowing, setCostPlowing] = useState(5);

  const [money, setMoney] = useState(300);
  const [currentCrop, setCurrentCrop] = useState(0);

  const [shopMarginX, setShopMarginX] = useState(50);
  const [shopMarginY, setShopMarginY] = useState(50);

  return (
    <>
      <div className="row-container">
        <Button
         className="shop-button"
         title="Shop"
        />
        <MoneyLabel
          money={money}
        />
      </div>
    </>
  );
};

export default GameContainer;
