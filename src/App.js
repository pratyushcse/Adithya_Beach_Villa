
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ParallaxRooms from "./components/ParallaxRooms";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <ParallaxRooms />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
