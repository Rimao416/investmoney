import Temoignage_1 from "../../src/assets/Temoignage_1.jpg";
import Temoignage_2 from "../../src/assets/Temoignage_2.jpg";
import Temoignage_3 from "../../src/assets/Temoignage_3.jpg";
import Temoignage_4 from "../../src/assets/Temoignage_4.jpg";
import Temoignage_5 from "../../src/assets/Temoignage_5.jpg";
import Temoignage_6 from "../../src/assets/Temoignage_6.jpg";
import Temoignage_7 from "../../src/assets/Temoignage_7.jpg";
import Temoignage_8 from "../../src/assets/Temoignage_8.jpg";
import Temoignage_9 from "../../src/assets/Temoignage_9.jpg";
import Temoignage_10 from "../../src/assets/Temoignage_10.jpg";
import Temoignage_12 from "../../src/assets/Temoignage_12.jpg";
import Temoignage_13 from "../../src/assets/Temoignage_13.jpg";

export interface TestimonialsProps {
  image: string;
  fullName: string;
  role: string;
  description: string;
}

export const TestimonialsData: TestimonialsProps[] = [
  {
    image: Temoignage_1,
    fullName: 'Amina Diop',
    role: 'Investisseuse Privée',
    description: 'Grâce à leurs conseils financiers, j’ai pu diversifier mon portefeuille et augmenter mes rendements. Leur expertise est inestimable !'
  },
  {
    image: Temoignage_2,
    fullName: 'Kofi Mensah',
    role: 'Entrepreneur',
    description: 'Leur service de gestion financière m’a permis de structurer mes finances et de faire croître mon entreprise de manière significative. Je leur fais totalement confiance.'
  },
  {
    image: Temoignage_3,
    fullName: 'Nneka Okeke',
    role: 'Gestionnaire de Patrimoine',
    description: 'Leur approche personnalisée et leurs recommandations stratégiques ont transformé la gestion de mon portefeuille. Je suis extrêmement satisfaite des résultats.'
  },
  {
    image: Temoignage_4,
    fullName: 'Thabo Khumalo',
    role: 'Directeur Financier',
    description: 'L’accompagnement offert m’a permis d’optimiser les ressources financières de notre entreprise, nous aidant à atteindre nos objectifs à long terme. Service impeccable !'
  },
  {
    image: Temoignage_5,
    fullName: 'Fatoumata Keita',
    role: 'Épargnante',
    description: 'Grâce à leurs conseils avisés, j’ai pu augmenter mes économies de manière significative tout en minimisant les risques. Une équipe experte et fiable !'
  },
  {
    image: Temoignage_6,
    fullName: 'Kwame Nkrumah',
    role: 'Investisseur Immobilier',
    description: 'Ils m’ont aidé à identifier les meilleures opportunités d’investissement immobilier, maximisant ainsi mes retours sur investissement. Leur expertise est cruciale pour mon succès.'
  },
  {
    image: Temoignage_7,
    fullName: 'Chinwe Anya',
    role: 'Consultante Financier',
    description: 'Leur analyse financière détaillée m’a permis de mieux conseiller mes clients et de leur proposer des solutions adaptées à leurs besoins spécifiques. Une ressource précieuse !'
  },
  {
    image: Temoignage_8,
    fullName: 'Lamine Diallo',
    role: 'Trader',
    description: 'Leurs outils de trading et leur accompagnement personnalisé m’ont permis de prendre des décisions éclairées et d’optimiser mes gains sur le marché. Un service exceptionnel !'
  },
  {
    image: Temoignage_9,
    fullName: 'Zainab Adamu',
    role: 'Responsable des Finances',
    description: 'Leur service de gestion des finances nous a permis de réduire nos coûts et d’augmenter notre profitabilité. Je recommande vivement leur expertise.'
  },
  {
    image: Temoignage_10,
    fullName: 'Moses Kibet',
    role: 'Analyste Financier',
    description: 'Leur expertise m’a permis de peaufiner mes analyses et d’apporter une réelle valeur ajoutée à mes rapports financiers. Un partenaire de confiance.'
  },

  {
    image: Temoignage_12,
    fullName: 'Binta Touré',
    role: 'Entrepreneuse',
    description: 'Leur accompagnement m’a permis de structurer mes finances et de faire prospérer mon entreprise. Leur approche est professionnelle et efficace.'
  },
  {
    image: Temoignage_13,
    fullName: 'Abdoulaye Sarr',
    role: 'Épargnant',
    description: 'Leurs conseils m’ont permis de sécuriser mes économies tout en générant des rendements constants. Une équipe de confiance pour gérer ses finances.'
  }
];

