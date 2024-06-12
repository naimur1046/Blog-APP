import { BrowserRouter, Routes, Route } from "react-router-dom";
import HandlePage from "./Components/HandlePage/HandlePage";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <HandlePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
