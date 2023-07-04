import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import Important from "./components/Important/Important";
import AboutUs from "./components/AboutUs/AboutUs";
import Availability from "./components/Availability/Availability";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL9iG1AQuzRJgonLuob5ploWInSEYFz7U",
  authDomain: "kinfolk-12570.firebaseapp.com",
  databaseURL: "https://kinfolk-12570-default-rtdb.firebaseio.com",
  projectId: "kinfolk-12570",
  storageBucket: "kinfolk-12570.appspot.com",
  messagingSenderId: "222932835268",
  appId: "1:222932835268:web:49cf4c517f8b0ae72a2291",
  measurementId: "G-N5YVLM79WE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Residencies />
      {/* <Value /> */}
      <Important />
      <Availability />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
