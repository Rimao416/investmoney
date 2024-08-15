// import React from 'react'
import { useState } from "react";
import Card from "../assets/card.png";
import { IoClose } from "react-icons/io5";
import Invest from "../assets/invest.png";
import Control from "../assets/control.svg";
import MyIcon from "../assets/invest.webp";
import Logo_1 from "../assets/logo_1.png";
import Logo_2 from "../assets/logo_2.png";
import Logo_3 from "../assets/logo_3.png";
import Logo_4 from "../assets/logo_4.png";
import Logo_5 from "../assets/logo_5.png";
import Button from "../components/Button";
import Analytic from "../assets/analytic.svg";
import Choice from "../assets/choice.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Invoice from "../assets/invoice.svg";
import { RxHamburgerMenu } from "react-icons/rx";

import Connexion from "../assets/connexion.svg";

import { cardData } from "../constants/CardData";
import { featuresData } from "../constants/FeaturesData";
import { TestimonialsData } from "../constants/Testimonials";
import { walletData } from "../constants/Wallet";
function Home() {
  const [activeFeature, setActiveFeatures] = useState(0);
  const LogoImages = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5];
  const ImageFeature = [Analytic, Invoice, Connexion];
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "A Propos", link: "#" },
    { label: "Avantages", link: "#" },
    { label: "Temoignages", link: "#" },
  ];
  const [active, setActive] = useState(false);
  return (
    <div className="app">
      <section className="header">
        <div className="header__navigation">
          <img src={Invest} />
          <ul className={`${active ? "active" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
          <Button
            content="S'inscrire"
            className={`${active ? "active w-100" : ""}`}
          />
          <span className="header__icon" onClick={() => setActive(!active)}>
            {active ? <IoClose /> : <RxHamburgerMenu />}
          </span>
        </div>
        {/* <div
          className={`header__responsive header__responsive--${
            active ? "active" : "inactive"
          }`}
        >
          <div className="header__wrapper">
            <img src={Invest} alt="" />
            <span className="navigation__icon" onClick={() => setActive(false)}>
              <IoClose />
            </span>
          </div>

          <ul
            className={`navigation__wrapper"
            }`}
          >
            {menuItems.map((item, index) => (
              <li className="navigation__wrapper--list" key={index}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>

          <Button content="S'inscrire"/>
        </div> */}
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
            {featuresData.map((features, index) => (
              <div
                className={`features__wrapper--card ${
                  index == activeFeature ? "active" : ""
                }`}
                onClick={() => setActiveFeatures(index)}
              >
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
      <section className="control">
        <div className="control__wrapper">
          <img src={Control} alt={Control} />
        </div>
        <div className="control__wrapper">
          <h1>Contrôler totalement son argent</h1>
          <p>
            Notre plateforme de banque en ligne est protégée par les dernières
            technologies de cryptage et d'authentification multi-facteurs, ce
            qui vous permet de gérer vos finances en toute sérénité.
          </p>
        </div>
      </section>
      <section className="choice">
        <div className="choice__wrapper">
          <h1>Virtuel ou physique ⎯ à vous de choisir</h1>
          <p>
            Que vous soyez à la maison, au travail ou en déplacement, notre
            plateforme de banque en ligne est accessible depuis votre
            ordinateur, votre tablette ou votre appareil mobile. Grâce à notre
            application de banque mobile, vous pouvez même déposer des chèques
            et gérer vos comptes en déplacement.
          </p>
        </div>
        <div className="choice__wrapper">
          <img src={Choice} alt={Choice} />
        </div>
      </section>
      <section className="testimonial">
        <section className="testimonial__overlay">
          <div className="testimonial__wrapper">
            <p>Témoignages</p>
            <h1>Ne nous croyez pas sur parole</h1>
            <p>
              Notre équipe d'assistance est disponible 24 heures sur 24 pour
              vous aider à résoudre vos questions ou problèmes.
            </p>
          </div>
          <div className="testimonial__wrapper">
            <Swiper
              // onSwiper={(swiper) => {
              //   swiperRef.current = swiper;
              // }}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 320px (typical phone)
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 640px (typical tablet)
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 1024px (typical desktop)
              }}
              effect="slide"
              // spaceBetween={20}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                stopOnLastSlide: true,
                // disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              pagination={{
                clickable: true,
              }}
              // navigation={true}

              className="mySwiper"
            >
              {TestimonialsData.map((testimonial) => (
                <SwiperSlide>
                  <div className="testimonial__body" key={testimonial.fullName}>
                    <img src={testimonial.image} alt={testimonial.image} />
                    <p>{testimonial.role}</p>

                    <p>{testimonial.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
      <section className="wallet">
        <div className="wallet__wrapper">
          <img src={Card} alt={Card} />
          <h1>Intégrations de portefeuilles</h1>
          <p>Que vous soyez à la maison, au travail ou en déplacement, notre plateforme de banque en ligne est accessible depuis votre ordinateur, votre tablette ou votre appareil mobile. Grâce à notre application de banque mobile, vous pouvez même déposer des chèques et gérer vos comptes en déplacement.</p>
        </div>
        <div className="wallet__wrapper">
          {walletData.map((wallet)=>(
            <div className="wallet__body" key={wallet.image}>
              <img src={wallet.image} alt={wallet.image} />
              <p>{wallet.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="footer">
        <div className="footer__container">
          <div className="footer__about">
            <h3>À propos de nous</h3>
            <p>
              Nous sommes une entreprise de nettoyage dédiée à offrir les
              meilleurs services à nos clients.
            </p>
          </div>
          <div className="footer__links">
            <h3>Liens utiles</h3>
            <ul>
              <li>
                <a href="/home">Accueil</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">À propos</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h3>Contactez-nous</h3>
            <p>Email: contact@entreprisenettoyage.com</p>
            <p>Téléphone: +123 456 7890</p>
            <p>Adresse: 123 Rue de la Propreté, Ville, Pays</p>
          </div>
          <div className="footer__social">
            <h3>Suivez-nous</h3>
            {/* <div className="footer__social-icons">
              <a href="#">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Entreprise de Nettoyage. Tous droits réservés.</p>
        </div>
      </section>
      <div className={`overlay overlay--${active ? "active" : ""}`}></div>
    </div>
  );
}

export default Home;
