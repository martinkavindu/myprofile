import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portifolio from "./Components/Portifolio/Portifolio";
import Testmonials from "./Components/Testmonials/Testmonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Works/>
   <Portifolio/>
   <Testmonials/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
