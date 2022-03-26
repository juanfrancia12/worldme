import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "modules/common/Layout";
import Spinner from "common/components/atoms/spinner";

import "styles/main.scss";

const PageBasics = lazy(() => import("pages/basics"));
const PageBoys = lazy(() => import("pages/boys"));
const PageHome = lazy(() => import("pages/home"));
const PageMan = lazy(() => import("pages/man"));
const PagePromotions = lazy(() => import("pages/promotions"));
const PageSports = lazy(() => import("pages/sports"));
const PageWomen = lazy(() => import("pages/women"));
const PageNotFound = lazy(() => import("pages/not_found"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" element={<PageHome />} />
            <Route exact path="/basics" element={<PageBasics />} />
            <Route exact path="/boys" element={<PageBoys />} />
            <Route exact path="/man" element={<PageMan />} />
            <Route exact path="/promotions" element={<PagePromotions />} />
            <Route exact path="/sports" element={<PageSports />} />
            <Route exact path="/women" element={<PageWomen />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </Suspense>
  );
}

export default App;
