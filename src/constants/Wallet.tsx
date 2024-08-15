import Logo_1 from "../assets/logo_1.png";
import Logo_2 from "../assets/logo_2.png";
import Logo_3 from "../assets/logo_3.png";
import Logo_4 from "../assets/logo_4.png";
interface walletProps{
    image:string,
    description:string
}
export const walletData:walletProps[]=[
    {
        image:Logo_1,
        description:"Effectuez des paiements sécurisés dans les magasins, en ligne et dans les applications d'une simple pression sur votre appareil Apple."
    },
    {
        image:Logo_2,
        description:"Reliez facilement votre compte PayPal à votre banque en ligne pour des paiements en ligne transparents et sécurisés."
    },
    {
        image:Logo_3,
        description:"Acceptez les paiements de clients du monde entier directement à partir de votre plateforme de banque en ligne."
    },
    {
        image:Logo_4,
        description:"Transférez facilement et en toute sécurité des fonds vers plus de 70 pays du monde entier à des taux compétitifs."
    },
]