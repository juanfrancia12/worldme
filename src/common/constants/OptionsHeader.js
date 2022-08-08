import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";

export const OptionsHeader = [
  {
    id: 1,
    icon: <FaSearch className="icon" />,
    name: "Buscar",
  },
  {
    id: 2,
    icon: <FaUserAlt className="icon" />,
    name: "Mi cuenta",
  },
  {
    id: 3,
    icon: <FaShoppingCart className="icon icon__cart" />,
    name: "Carrito",
  },
];
