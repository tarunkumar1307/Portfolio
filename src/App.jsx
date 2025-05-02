import { Routes, Route, useLocation } from 'react-router-dom';
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/resume";
import Certifications from "./Components/Certification/Certification";

function App() {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  return (
    <div className="bg-[var(--primary-bg)] h-auto w-full overflow-hidden">
      {/* Show Navbar unless on Resume page */}
      {!isResumePage && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Certifications />
            <Footer />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;