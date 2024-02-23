import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doorstep from './components/Doorstep.js';
import Body from './components/Body.js';
import Styles from './pages/Styles.js';
import Javascript from './pages/Javascript.js';


function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Doorstep />} />
          <Route path="/entered" element={<Body />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/javascript" element={<Javascript />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
