// import React from 'react'
import { useState } from "react";
import Invest from "../assets/invest.png";
import MyIcon from "../assets/invest.webp";
import Logo_1 from "../assets/logo_1.png";
import Logo_2 from "../assets/logo_2.png";
import Logo_3 from "../assets/logo_3.png";
import Logo_4 from "../assets/logo_4.png";
import Logo_5 from "../assets/logo_5.png";
import Button from "../components/Button";
import Analytic from "../assets/analytic.svg"
import Invoice from "../assets/invoice.svg"
import Connexion from "../assets/connexion.svg"

import { cardData } from "../constants/CardData";
import { featuresData } from "../constants/FeaturesData";
function Home() {
  const [activeFeature,setActiveFeatures]=useState(0)
  const LogoImages = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5];
  const ImageFeature=[Analytic,Invoice,Connexion]
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
            Chez InvestMoney, nous comprenons l'importance de rester en tête
            dans le monde en constante évolution des échanges de
            crypto-monnaies.
          </p>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Button content="Demander une démo" />
          </div>
        </div>
        <div className="header__container">
          <img src={MyIcon} alt={MyIcon} className="header__bank" />
        </div>
        {/* <img src={MyIcon} alt={MyIcon} className="header__bank" /> */}
      </section>
      <section className="overview">
        <div className="overview__header">
          <p className="overview__header--header">Pourquoi InvestMoney</p>
          <h1 className="overview__header--title">
            La seule application finTech dont vous aurez besoin
          </h1>
          <p className="overview__header--description">
            Notre plateforme est conçue pour rendre le trading simple,
            accessible et rentable pour tout le monde.
          </p>
        </div>
        <div className="overview__cards">
          {cardData.map((card) => (
            <div className="overview__cards--card">
              <img src={card.icon} alt={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="features">
        <div className="features__header">
          <h1 className="features__header--title">
            Des services bancaires en ligne très pratiques
          </h1>
          <p className="features__header--description">
            Vous pouvez consulter le solde de vos comptes, l'historique de vos
            transactions et vos relevés, et même configurer des alertes
            personnalisées pour vous aider à garder le contrôle de vos finances.
          </p>
        </div>
        <div className="features__container">
          <div className="features__wrapper">
            {featuresData.map((features,index) => (
              <div className={`features__wrapper--card ${index==activeFeature ? "active":""}`} onClick={()=>setActiveFeatures(index)}>
                <img src={features.icon} alt={features.icon} />
                <h3>{features.title}</h3>
                <p>{features.content}</p>
              </div>
            ))}
          </div>
          <div className="features__wrapper">
            <img src={ImageFeature[activeFeature]} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
