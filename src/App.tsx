import { Routes, Route } from "react-router-dom";
import { AppDecorator } from "./components/organisms/Layout";
import { MainView, MovieView } from "./components/pages";
import { Suspense, lazy } from "react";

const GalleryView = lazy(
  () => import("../src/components/pages/GalleryView//GalleryView")
);

function App() {
  return (
    <AppDecorator>
      <Routes>
        <Route path="" element={<MainView />} />
        <Route path="/movie">
          <Route path=":id">
            <Route path="" element={<MovieView />} />
            <Route
              path="images"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <GalleryView />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </AppDecorator>
  );
}

export default App;
