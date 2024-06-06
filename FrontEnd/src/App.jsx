import { BrowserRouter, Routes, Route } from "react-router-dom";
import HandlePage from "./Components/HandlePage/HandlePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HandlePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
