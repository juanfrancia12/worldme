import React, { useState, useEffect } from "react";

import { Data } from "common/data/home/index.js";

import SectionHeading from "./components/SectionHeading";
import SectionRecommended from "./components/SectionRecommended";
import SectionHomeCards from "./components/SectionHomeCards";
import SectionAdditional from "./components/SectionAdditional";
import SectionSubscribe from './components/SectionSubscribe';

const Home = () => {
  const [dataSlice, setDataSlice] = useState(5);

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
      <section className="padding__section section">
        <SectionHeading title="Recomendado para ti" />
        <SectionRecommended data={Data.recommended} />
      </section>

      <SectionHomeCards
        data={Data.women}
        islargeleft={true}
        dataSlice={dataSlice}
        isleft={true}
      />

      <SectionHomeCards
        data={Data.men}
        islargeleft={false}
        dataSlice={dataSlice}
        isleft={false}
      />

      <SectionHomeCards
        data={Data.boys}
        islargeleft={true}
        dataSlice={dataSlice}
        isleft={true}
      />

      <SectionHomeCards
        data={Data.sports}
        islargeleft={false}
        dataSlice={dataSlice}
        isleft={false}
      />

      <section className="padding__section section">
        <SectionHeading title="Nuevos Lanzamientos" />
        <SectionRecommended data={Data.news} shortHeight={true} />
      </section>

      <SectionAdditional data={Data.additional} />

      <SectionSubscribe/>
    </>
  );
};

const index = () => {
  return <Home />;
};

export default index;
