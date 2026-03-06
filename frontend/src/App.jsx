import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About'
import Academics from "./Pages/Academics";
import Admissions from './Pages/Admissions';
import Student_life from "./Pages/Student_life";
import Contact from "./Pages/Contact";
import Mission from "./Components/Mission/Mission";
import SpecialFeatures from "./Components/SpecialFeatures/SpecialFeatures";
import RoomsGallery from "./Components/RoomsGallery/RoomsGallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Team from "./Components/Team/Team";
import Awards from "./Components/Awards/Awards";
import History from "./Components/History/History";
import Benefits from "./Components/Benefits/Benefits";
import FAQ from "./Components/FAQ/FAQ";


function App() {
  return (
    <div className="App">
    <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Academics" element={<Academics/>}/>
        <Route path="/Admissions" element={<Admissions/>}/>
        <Route path="/Student_life" element={<Student_life/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        {/* {pour les route de footer} */}
        <Route path="/mission" element={<Mission />} />
        <Route path="/special-features" element={<SpecialFeatures />} />
          <Route path="/gallery" element={<RoomsGallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/History" element={<History />} />
          <Route path="/Benefits" element={<Benefits />} />
          <Route path="/faq" element={<FAQ/>}/>
          

      </Routes>
    
    <Footer />
    </div>
  );
}
export default App;
