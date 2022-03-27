import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
            <Route exact path="/worldme" element={<PageHome />} />
            <Route exact path="/worldme/basics" element={<PageBasics />} />
            <Route exact path="/worldme/boys" element={<PageBoys />} />
            <Route exact path="/worldme/man" element={<PageMan />} />
            <Route
              exact
              path="/worldme/promotions"
              element={<PagePromotions />}
            />
            <Route exact path="/worldme/sports" element={<PageSports />} />
            <Route exact path="/worldme/women" element={<PageWomen />} />
            <Route
              exact
              path="/"
              element={<Navigate to="/worldme" replace />}
            />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </Suspense>
  );
}

export default App;
