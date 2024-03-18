import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Services from "./components/Services";
import Footer from "./components/Foote";
function App() {
  return (
    <>
      <Router>
      <div className="max-w-6xl mx-auto">
    <Navbar />
    <Home />
    <Services/>
    </div>
    <Footer />
      </Router>

      
    </>
  );
}

export default App;
