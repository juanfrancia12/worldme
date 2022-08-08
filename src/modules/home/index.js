import React, { useState, useEffect } from "react";

// import { data} from "common/data/home/index.js";
import { useProducts } from 'common/hooks/useProducts';


import SectionHeading from "./components/SectionHeading";
import SectionRecommended from "./components/SectionRecommended";
import SectionHomeCards from "./components/SectionHomeCards";
import SectionAdditional from "./components/SectionAdditional";
import SectionSubscribe from "./components/SectionSubscribe";

const Index = () => {
  const [dataSlice, setDataSlice] = useState(5);

  const { products } = useProducts()

  useEffect(() => {
    const updateWidth = () => {
      const width = window.document.body.clientWidth;
      if (width >= 1072) {
        return setDataSlice(3);
      } else {
        return setDataSlice(5);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <section className="section__grid--gap">
        <section className="padding__section section">
          <SectionHeading title="Recomendado para ti" />
          <SectionRecommended data={products.recommended} />
        </section>

        <SectionHomeCards
          data={products.women}
          islargeleft={true}
          dataSlice={dataSlice}
          isleft={true}
          category="women"
        />

        <SectionHomeCards
          data={products.men}
          islargeleft={false}
          dataSlice={dataSlice}
          isleft={false}
          category="men"
        />

        <SectionHomeCards
          data={products.boys}
          islargeleft={true}
          dataSlice={dataSlice}
          isleft={true}
          category="boys"
        />

        <SectionHomeCards
          data={products.sports}
          islargeleft={false}
          dataSlice={dataSlice}
          isleft={false}
          category="sports"
        />

        <section className="padding__section section">
          <SectionHeading title="Nuevos Lanzamientos" />
          <SectionRecommended data={products.news} shortHeight={true} />
        </section>

        <SectionAdditional data={products.additional} />

        <SectionSubscribe />
      </section>
    </>
  );
};

export default Index;
