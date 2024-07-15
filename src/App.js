import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Hero from "./Pages/Hero/Hero";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Hero />} />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
