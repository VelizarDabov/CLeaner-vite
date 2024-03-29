import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Services from "./components/Services";
import Footer from "./components/Foote";
import About from "./components/About";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
      <Router>
        <div className="max-w-6xl mx-auto">
          <Navbar />
          <Home />
          <About />
          <Services />
          <Gallery />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
