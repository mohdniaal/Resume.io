import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Blogs from './blog';





function App() {
  return (

    <Router>

      <div className="App">
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
