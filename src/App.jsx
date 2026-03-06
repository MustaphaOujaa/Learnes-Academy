import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About'
import Academics from "./Pages/Academics";
import Admissions from './Pages/Admissions';
import Student_life from "./Pages/Student_life";
import Contact from "./Pages/Contact";


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
      </Routes>
    
    <Footer />
    </div>
  );
}
export default App;
