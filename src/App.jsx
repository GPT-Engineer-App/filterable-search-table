import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  const [names, setNames] = useState([
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "London" },
    { id: 3, name: "Bob Johnson", age: 35, city: "Paris" },
    { id: 4, name: "Alice Brown", age: 28, city: "New York" },
    { id: 5, name: "Charlie Davis", age: 32, city: "London" },
  ]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index names={names} />} />
        <Route path="/admin" element={<Admin names={names} setNames={setNames} />} />
      </Routes>
    </Router>
  );
}

export default App;
