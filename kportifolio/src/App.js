import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portifolio from "./Components/Portifolio/Portifolio";
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Works/>
   <Portifolio/>
    </div>
  );
}

export default App;
