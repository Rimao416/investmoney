import { cardProps } from "./CardData";
import Invoice from "../assets/income.png"
import Industrial from "../assets/industrial.png"
import Jigsaw from "../assets/jigsaw.png"
export const featuresData: cardProps[] = [
    {
        title: "Suivi des revenus et dépenses",
        content: "Gardez un œil sur vos finances avec un suivi détaillé de vos revenus et de vos dépenses en temps réel.",
        icon: Invoice
    },
    {
        title: "Facturation automatisée",
        content: "Simplifiez votre gestion financière grâce à la création et à l'envoi automatiques de factures professionnelles.",
        icon: Industrial
       
    },
    {
        title: "Connexion crypto",
        content: "Intégrez vos portefeuilles de crypto-monnaies pour surveiller et gérer vos actifs numériques en un seul endroit.",
        icon: Jigsaw
    }
];
