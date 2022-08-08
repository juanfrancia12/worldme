import women1 from "common/assets/image/home/women/1.jpg";
import women2 from "common/assets/image/home/women/2.jpg";
import women3 from "common/assets/image/home/women/3.jpg";

export const dataWomen = [
  {
    id: 1,
    image: women1,
    name: "Mujer",
    islarge: true,
  },
  {
    id: 2,
    image: women2,
    name: "WorldMe",
    description: "Laboriosam voluptatem et consectetur.",
    price_old: 50.99,
    price_new: 46.99,
    islarge: false,
    discount: {
      type: "percentage",
      amount: 20,
    },
  },
  {
    id: 3,
    image: women3,
    name: "WorldMe",
    description: "Laboriosam voluptatem et consectetur.",
    price_old: 40.99,
    price_new: 22.99,
    islarge: false,
    discount: {
      type: "money",
      amount: 30,
    },
  },
  {
    id: 4,
    image: women2,
    name: "WorldMe",
    description: "Laboriosam voluptatem et consectetur.",
    price_old: 60.99,
    price_new: 52.99,
    islarge: false,
    discount: {
      type: "percentage",
      amount: 41,
    },
  },
  {
    id: 5,
    image: women3,
    name: "WorldMe",
    description: "Laboriosam voluptatem et consectetur.",
    price_old: 150.99,
    price_new: 99.99,
    islarge: false,
    discount: {
      type: "percentage",
      amount: 10,
    },
  },
];
