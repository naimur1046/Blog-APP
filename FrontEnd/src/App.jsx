import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import DashBoard from "./Pages/DashBoard";
import Project from "./Pages/Project";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/sign-in-page" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
