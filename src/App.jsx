import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
      <div className="max-w-6xl mx-auto">
    <Navbar />
    <Home />
    </div>
      </Router>

      
    </>
  );
}

export default App;
