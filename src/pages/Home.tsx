// import React from 'react'
import Invest from "../assets/invest.png";
import MyIcon from "../assets/invest.webp";
import Logo_1 from "../assets/logo_1.png";
import Logo_2 from "../assets/logo_2.png";
import Logo_3 from "../assets/logo_3.png";
import Logo_4 from "../assets/logo_4.png";
import Logo_5 from "../assets/logo_5.png";
import Button from "../components/Button";
function Home() {
  const LogoImages = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5];
  return (
    <div className="app">
      <section className="header">
        <div className="header__navigation">
          <img src={Invest} />
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">A Propos</a>
            </li>
            <li>
              <a href="#">Avantages</a>
            </li>
            <li>
              <a href="#">Témoignages</a>
            </li>
          </ul>
          <Button content="S'inscrire" />
        </div>
        <div className="header__logo">
          {LogoImages.map((logos) => (
            <img src={logos} alt={logos} className="header__logo--images" />
          ))}
        </div>
        <div className="header__overlay"></div>
        <div className="header__text">
          <p>Faites décoller votre portefeuille</p>
          <h1>Prenez le contrôle de votre avenir financier</h1>
          <p>
            Chez FinFlow, nous comprenons l'importance de rester en tête dans le
            monde en constante évolution des échanges de crypto-monnaies.
          </p>
          <div style={{textAlign:"center",marginTop:"24px"}}>
            <Button content="Demander une démo" />
          </div>
        </div>
        <img src={MyIcon} alt={MyIcon} className="header__bank" />
      </section>
    </div>
  );
}

export default Home;
