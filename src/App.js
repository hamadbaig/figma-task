import "./App.css";
import "typeface-poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
