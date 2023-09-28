import { Routes, Route } from "react-router-dom";
import { AppDecorator } from "./components/organisms/Layout";
import { MainView } from "./components/pages";

function App() {
  return (
    <AppDecorator>
      <Routes>
        <Route path="" element={<MainView />} />
      </Routes>
    </AppDecorator>
  );
}

export default App;
