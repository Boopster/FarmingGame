import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Footer from '../components/Footer';

const GameContainer = () => {

  const [page, setPage] = useState("park");
  const [money] = useState(300);

  useEffect(() => {
  }, [page]);

  const goToShop = (e) => {
    setPage("shop");
  }

  return (
    <>
      <div className="main-grid-container">
        <Header/>
        <Grid/>
        <Footer
          money={money}
          goToShop={goToShop}
        />
      </div>
    </>
  );
};

export default GameContainer;
