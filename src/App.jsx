import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import ScorePage from './components/ScorePage/ScorePage';
import Best5Page from './components/Best5Page/Best5Page';
import TemplateSelectionPage from './components/TemplateSelectionPage/TemplateSelectionPage'; // Updated import for Template Selection
import Template1 from './components/Template1/Template1'; // Import Template1
import Template2 from './components/Template2/Template2'; // Import Template2
import Template3 from './components/Template3/Template3'; // Import Template3
import Template4 from './components/Template4/Template4'; // Import Template4
import Template5 from './components/Template5/Template5';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Speedometer from "./components/Speedometer/Speedometer";
import RedirectPage from "./components/Best5Page/Best5Page";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/speedometer" element={<Speedometer />} />
        <Route path="/best5" element={<Best5Page />} />
        <Route path="/buildResume" element={<TemplateSelectionPage />} /> {/* Updated Route */}
        <Route path="/build-resume/1" element={<Template1 />} />
        <Route path="/build-resume/2" element={<Template2 />} />
        <Route path="/build-resume/3" element={<Template3 />} />
        <Route path="/build-resume/4" element={<Template4 />} />
        <Route path="/build-resume/5" element={<Template5 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
