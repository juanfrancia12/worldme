import React from "react";
import { useProducts } from "common/hooks/useProducts";
import SectionBanner from "./components/SectionBanner";
import SectionFilters from "./components/SectionFilters";
import SectionList from "./components/SectionList";

const Index = () => {
  const { products } = useProducts();
  console.log("index", products.women);
  return (
    <section className="padding__section section">
      <SectionBanner products={products} />

      <section className="grid__secondary">
        <SectionFilters />
        <SectionList products={products.women} category="women" />
      </section>
    </section>
  );
};

export default Index;
