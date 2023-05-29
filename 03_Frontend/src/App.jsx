import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import PSQLComponent from "./Components/PSQL_Component/PSQL_Component";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<h1>Python Page</h1>} />
          <Route exact path="/psql" element={<PSQLComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
