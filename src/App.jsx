import Benefits from "./Components/Benefits";
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import NavigationPages from "./Components/NavigationPages.JSX";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <NavigationPages />
      <Footer />

    </div>
  );
}
export default App;
