import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Residencies />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
