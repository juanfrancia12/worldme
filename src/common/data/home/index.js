// import { lazy } from "react";

import { MdDeliveryDining, MdPublishedWithChanges } from "react-icons/md";
import { FaUserLock, FaStore } from "react-icons/fa";

import recommended1 from "common/assets/image/home/recommended/1.jpg";
import recommended2 from "common/assets/image/home/recommended/2.jpg";
import recommended3 from "common/assets/image/home/recommended/3.jpg";
import recommended4 from "common/assets/image/home/recommended/4.jpg";

import women1 from "common/assets/image/home/women/1.jpg";
import women2 from "common/assets/image/home/women/2.jpg";
import women3 from "common/assets/image/home/women/3.jpg";

import men1 from "common/assets/image/home/men/1.jpg";
import men2 from "common/assets/image/home/men/2.jpg";
import men3 from "common/assets/image/home/men/3.jpg";

import boy1 from "common/assets/image/home/boys/1.jpg";
import boy2 from "common/assets/image/home/boys/2.jpg";
import boy3 from "common/assets/image/home/boys/3.jpg";

import sport1 from "common/assets/image/home/sports/1.jpg";
import sport2 from "common/assets/image/home/sports/2.jpg";
import sport3 from "common/assets/image/home/sports/3.jpg";

import new1 from "common/assets/image/home/news/1.jpg";
import new2 from "common/assets/image/home/news/2.jpg";
import new3 from "common/assets/image/home/news/3.jpg";

import subscribe from "common/assets/image/home/news/1.jpg";

// const MdDeliveryDining = lazy(() => import("react-icons/md"));
// const MdPublishedWithChanges = lazy(() => import("react-icons/md"));

export const data = {
  recommended: [
    {
      id: 1,
      image: recommended1,
      title: "Mujer",
      subtitle: "CASACAS",
    },
    {
      id: 2,
      image: recommended2,
      title: "Hombre",
      subtitle: "POLERAS",
    },
    {
      id: 3,
      image: recommended3,
      title: "Mujer",
      subtitle: "BLUSAS",
    },
    {
      id: 4,
      image: recommended4,
      title: "Mujer",
      subtitle: "CHOMPAS",
    },
  ],
  women: [
    {
      id: 1,
      image: women1,
      name: "Mujer",
      islarge: true,
    },
    {
      id: 2,
      image: women2,
      name: "Chompa",
      description: "Laboriosam voluptatem et consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quas consectetur numquam sed, sint nostrum ipsa rem autem temporibus, molestiae facilis. Incidunt libero consequatur ipsa culpa expedita deleniti architecto ad?. Magnam recusandae dignissimos odio ducimus culpa. Libero sapiente laboriosam, voluptate ipsa tenetur optio non voluptates dicta labore, mollitia perferendis dolore corporis quos quis quaerat nam repellat error explicabo asperiores sed",
      price_old: 50.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 20,
      },
    },
    {
      id: 3,
      image: women3,
      name: "Casaca",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 40.99,
      islarge: false,
      discount: {
        type: "money",
        amount: 30,
      },
    },
    {
      id: 4,
      image: women2,
      name: "Polo",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 60.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 41,
      },
    },
    {
      id: 5,
      image: women3,
      name: "Blusa",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 150.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 10,
      },
    },
  ],
  men: [
    {
      id: 1,
      image: men1,
      name: "Casaca hombre",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 40.99,
      price_new: 22.99,
      islarge: false,
      discount: {
        type: "money",
        amount: 40,
      },
    },
    {
      id: 2,
      image: men2,
      name: "Chompa hombre",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 50.99,
      price_new: 46.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 30,
      },
    },
    {
      id: 3,
      image: men1,
      name: "Camisa hombre",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 52.99,
      price_new: 45.99,
      islarge: false,
      discount: {
        type: "money",
        amount: 10,
      },
    },
    {
      id: 4,
      image: men2,
      name: "Pantalon hombre",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 43.99,
      price_new: 28.99,
      islarge: false,
      discount: {
        type: "money",
        amount: 60,
      },
    },
    {
      id: 5,
      image: men3,
      name: "Hombre",
      islarge: true,
    },
  ],
  boys: [
    {
      id: 1,
      image: boy1,
      name: "Niño y niña",
      islarge: true,
    },
    {
      id: 2,
      image: boy2,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 50.99,
      price_new: 46.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 10,
      },
    },
    {
      id: 3,
      image: boy3,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 84.99,
      price_new: 79.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 10,
      },
    },
    {
      id: 4,
      image: boy2,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 40.99,
      price_new: 22.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 10,
      },
    },
    {
      id: 5,
      image: boy3,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 128.99,
      price_new: 97.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 10,
      },
    },
  ],
  sports: [
    {
      id: 1,
      image: sport1,
      name: "Worldme",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 40.99,
      price_new: 22.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 34,
      },
    },
    {
      id: 2,
      image: sport2,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 50.99,
      price_new: 46.99,
      islarge: false,
      discount: {
        type: "money",
        amount: 3,
      },
    },
    {
      id: 3,
      image: sport1,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 98.99,
      price_new: 84.99,
      islarge: false,
      discount: {
        type: "money",
        amount: 65,
      },
    },
    {
      id: 4,
      image: sport2,
      name: "WorldMe",
      description: "Laboriosam voluptatem et consectetur.",
      price_old: 74.99,
      price_new: 69.99,
      islarge: false,
      discount: {
        type: "percentage",
        amount: 24,
      },
    },
    {
      id: 5,
      image: sport3,
      name: "Deporte",
      islarge: true,
    },
  ],
  news: [
    {
      id: 1,
      image: new1,
      title: "Lo nuevo",
    },
    {
      id: 2,
      image: new2,
      title: "Tu estilo",
    },
    {
      id: 3,
      image: new3,
      title: "Lo mejor para ella",
    },
  ],
  additional: [
    {
      id: 1,
      image: <FaUserLock className="icon icon__additional" />,
      title: "Pagos 100% seguros",
    },
    {
      id: 2,
      image: <MdPublishedWithChanges className="icon icon__additional" />,
      title: "Cambios y devoluciones",
    },
    {
      id: 3,
      image: <MdDeliveryDining className="icon icon__additional" />,
      title: "Envío a Lima y a provincias",
    },
    {
      id: 4,
      image: <FaStore className="icon icon__additional" />,
      title: "Recoge tus compras gratis en tienda",
    },
  ],
  subscribe: {
    image: subscribe,
  },
  promotions : []
};
