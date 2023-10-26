import { Routes, Route } from "react-router-dom";
import { AppDecorator } from "./components/organisms/Layout";
import { MainView, MovieView } from "./components/pages";

function App() {
  return (
    <AppDecorator>
      <Routes>
        <Route path="" element={<MainView />} />
        <Route path="/movie/:id" element={<MovieView />} />
      </Routes>
    </AppDecorator>
  );
}

export default App;
