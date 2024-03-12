import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
      <div className="max-w-7xl mx-auto">
    <Navbar />
    </div>
      </Router>

      
    </>
  );
}

export default App;
