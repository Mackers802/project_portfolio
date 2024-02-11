import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doorstep from './components/Doorstep.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Doorstep />} />
          <Route path="/entered" element={<Body />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
