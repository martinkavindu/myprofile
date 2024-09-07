import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/UI/Profile";
import Services from "./components/UI/Services";
import Portifolio from "./components/UI/Portifolio";
import Contact from "./components/UI/Contact";
import Technologies from "./components/UI/Technologies";
import Floatingbutton from "./components/UI/Floatingbutton";
import Workexperience from "./components/UI/Workexperience";




function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>

      <Header />
      <main>
  
        <Profile/>
        <Services/>
        <Portifolio/>
        <Workexperience/>
        <Technologies/>
        <Contact/>
        <Floatingbutton/>
      </main>
      <Footer />
    
    </>
  );
}

export default App;
