import { BookingData } from "../model/types";
import GreekSalad from "../assets/images/greek salad.jpg";
import Bruchetta from "../assets/images/bruchetta.svg";
import LemonDessert from "../assets/images/lemon dessert.jpg";
import ChickenSkew from "../assets/images/chicken-skewers.jpeg";
import ShrimpChickpea from "../assets/images/shrimp-chickpea.jpeg";

export const apiURL =  "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

export const seededRandom = function (seed:number) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date:Date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData:BookingData) {
    return true;
};



export const specials = [
    {
      id: "4125wefe",
      image: GreekSalad,
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      id: "iojfmo3r0923ve",
      image: Bruchetta,
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: "klklas020345",
      image: LemonDessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  export const menuDishes = [
    {
        id: "934rieqwdp",
        image: ChickenSkew,
        title: "Chicken Skewers",
        price: "$9.99",
        description:
          "Juicy chicken marinated in a mixture of lemon juice, olive oil, fresh herbs, and spices, grilled to perfection and served on a skewer.",
      },
      {
        id: "4125wefe",
        image: GreekSalad,
        title: "Greek salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      },
      {
        id: "iojfmo3r0923ve",
        image: Bruchetta,
        title: "Bruchetta",
        price: "$5.99",
        description:
          "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      },
      {
        id: "03924dmwSDV",
        image: ShrimpChickpea,
        title: "Shrimp and Chickpea",
        price: "$19.99",
        description:
          "A hearty and flavorful stew made with juicy shrimp, chickpeas, and a mixture of aromatic spices such as paprika, cumin, and coriander.",
      }, 
      {
        id: "klklas020345",
        image: LemonDessert,
        title: "Lemon Dessert",
        price: "$5.00",
        description:
          "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      }
  ];

  export const onlineDishes = [ {
    id: "03924dmwSDV",
    image: ShrimpChickpea,
    title: "Shrimp and Chickpea",
    price: "$19.99",
    description:
      "A hearty and flavorful stew made with juicy shrimp, chickpeas, and a mixture of aromatic spices such as paprika, cumin, and coriander.",
  }, ...specials ];