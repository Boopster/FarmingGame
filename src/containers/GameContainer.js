import React, {useState, useEffect} from 'react';

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

  return (
    <></>
  );
};

export default GameContainer;
