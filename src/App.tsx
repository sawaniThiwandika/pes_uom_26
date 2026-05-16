// import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About.tsx";
// import Committees from "./pages/Commitees.tsx";
// import AwardsPanel from "./components/AwardsPanel.tsx";
// import Home from "./pages/Home.tsx";
// import Navbar from "./components/Navbar.tsx";
// import VolunteerPage from "./pages/VolunteerPage.tsx";
// import Projects from "./pages/Projects.tsx";
// import Contact from "./pages/Contact.tsx";
// import CustomCursor from "./components/CustomCursor.tsx";
// import GlobalParticles from "./components/GlobalParticles.tsx";
// import PageTransition from "./components/PageTransition.tsx";

// function App() {
//   return (
//     <>
//       {/* Fixed global layers — render once, survive all route changes */}
//       <GlobalParticles />
//       <CustomCursor />
//       <PageTransition />

//       {/* Shell */}
//       <Navbar />
//       <AwardsPanel />

//       {/* All page content sits above z-index:0 canvas */}
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Routes>
//           <Route path="/"           element={<Home />} />
//           <Route path="/about"      element={<About />} />
//           <Route path="/committees" element={<Committees />} />
//           <Route path="/projects"   element={<Projects />} />
//           <Route path="/volunteer"  element={<VolunteerPage />} />
//           <Route path="/contact"    element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Committees from "./pages/Commitees.tsx";
import AwardsPanel from "./components/AwardsPanel.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import VolunteerPage from "./pages/VolunteerPage.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import GlobalParticles from "./components/GlobalParticles.tsx";
import PageTransition from "./components/PageTransition.tsx";

function App() {
  return (
    <>
      {/* ── Fixed global layers — survive all route changes ── */}
      <GlobalParticles />
      <CustomCursor />
      <PageTransition />

      {/* ── Shell ── */}
      <Navbar />
      <AwardsPanel />

      {/*
        ── IMPORTANT: NO zIndex or position on this wrapper ──
        Adding position:relative + zIndex:1 here creates a stacking context
        that buries the fixed GlobalParticles canvas (z-index:0) on every page.
        Instead, each page/component manages its own z-index internally.
        The canvas is visible on all pages because nothing above it creates
        a competing stacking context at the root level.
      */}
      <div>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/volunteer"  element={<VolunteerPage />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;