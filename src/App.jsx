import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Services from "./components/Services";
function App() {
  return (
    <>
      <Router>
      <div className="max-w-6xl mx-auto">
    <Navbar />
    <Home />
    <Services/>
    </div>
      </Router>

      
    </>
  );
}

export default App;
