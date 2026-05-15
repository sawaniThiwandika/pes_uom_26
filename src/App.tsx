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

// function App() {
//   return (
//     <>
//       <Navbar />
//       <AwardsPanel />

//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/committees" element={<Committees />} />
//         <Route path="/projects" element={< Projects/>} />

//         <Route path="/volunteer" element={<VolunteerPage />} />
//         <Route path="/contact" element={<Contact />} />
//       {/*  <Route path="/achievements" element={<Achievements />} />
//         <Route path="/achievement/:id" element={<AchievementDetails />} />*/}

//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

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

// function App() {
//   return (
//     <>
//       <CustomCursor />
//       <Navbar />
//       <AwardsPanel />
//       <Routes>
//         <Route path="/"           element={<Home />} />
//         <Route path="/about"      element={<About />} />
//         <Route path="/committees" element={<Committees />} />
//         <Route path="/projects"   element={<Projects />} />
//         <Route path="/volunteer"  element={<VolunteerPage />} />
//         <Route path="/contact"    element={<Contact />} />
//       </Routes>
//       <Footer />
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
      {/* Fixed global layers — render once, survive all route changes */}
      <GlobalParticles />
      <CustomCursor />
      <PageTransition />

      {/* Shell */}
      <Navbar />
      <AwardsPanel />

      {/* All page content sits above z-index:0 canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
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
