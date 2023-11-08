import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/UI/Profile";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Profile/>
      </main>
      <Footer />
    </>
  );
}

export default App;
