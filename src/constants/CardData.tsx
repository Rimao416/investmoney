import Money from "../assets/money.png"
import Deal from "../assets/deal.png"
import Card from "../assets/card.png"
export interface cardProps{
    title:string,
    content:string,
    icon:string
}

export const cardData: cardProps[] = [
    {
        title: "Gestion des Investissements",
        content: "Optimisez votre portefeuille avec des stratégies d'investissement personnalisées.",
        icon: Money
    },
    {
        title: "Suivi des Dépenses",
        content: "Gardez un œil sur vos dépenses et ajustez vos budgets en temps réel.",
        icon: Deal
    },
    {
        title: "Planification de la Retraite",
        content: "Assurez-vous un avenir serein grâce à une planification retraite adaptée.",
        icon: Card
    }
];
