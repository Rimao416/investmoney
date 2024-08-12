// import React from 'react'
import Invest from "../assets/invest.png";
import MyIcon from "../assets/invest.webp";
function Home() {
  return (
    <div className="app">
      <section className="header">
        <div className="header__navigation">
        <img src={Invest} />
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">A Propos</a></li>
          <li><a href="#">Avantages</a></li>
          <li><a href="#">Témoignages</a></li>
        </ul>
        <button>S'inscrire</button>

        </div>
        <div className="header__overlay">
        
        </div>
        <div className="header__text">
        <h1>Prenez le contrôle de votre avenir financier</h1>
          <p>
          Chez FinFlow, nous comprenons l'importance de rester en tête dans le monde en constante évolution des échanges de crypto-monnaies.
          </p>
        </div>
        <img src={MyIcon} alt={MyIcon} className="header__bank" />
      </section>
    </div>
  );
}

export default Home;
