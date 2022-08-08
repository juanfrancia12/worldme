import React from "react";
import { useProducts } from "common/hooks/useProducts";
import SectionBanner from "../common/SectionBanner";
import SectionFilters from "../common/SectionFilters";
import SectionList from "../common/SectionList";

const accordionItems = [
  {
    label: "Marca",
    value: "Seleccione las marcas",
    data: [
      {
        id: "M001",
        label: "Dior",
        value: "dior",
      },
      {
        id: "M002",
        label: "Nike",
        value: "nike",
      },
      {
        id: "M003",
        label: "Gucci",
        value: "gucci",
      },
      {
        id: "M004",
        label: "Zara",
        value: "zara",
      },
      {
        id: "M005",
        label: "Adidas",
        value: "adidas",
      },
    ],
  },
  {
    label: "Talla",
    value: "Seleccione la talla",
    data: [
      {
        id: "T001",
        label: "Pequeña",
        value: "small",
      },
      {
        id: "T002",
        label: "Mediana",
        value: "medium",
      },
      {
        id: "T003",
        label: "Grande",
        value: "large",
      },
      {
        id: "T004",
        label: "Extra grande",
        value: "extralarge",
      },
    ],
  },
];

const Index = () => {
  const { products } = useProducts();
  return (
    <section className="padding__section section">
      <SectionBanner products={products} category="boys" />

      <section className="grid__secondary">
        <SectionFilters accordionItems={accordionItems} />
        <SectionList products={products.boys} category="boys" />
      </section>
    </section>
  );
};

export default Index;
