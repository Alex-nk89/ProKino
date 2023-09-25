import { Routes, Route } from "react-router-dom";
import { AppDecorator } from "./components/organisms/Layout";

function App() {
  return (
    <AppDecorator>
      <Routes>
        <Route path="" />
      </Routes>
    </AppDecorator>
  );
}

export default App;
