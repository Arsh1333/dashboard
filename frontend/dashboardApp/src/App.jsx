import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    // <div className="font-lato w-full">
    //   <Navbar></Navbar>
    //   <Hero></Hero>
    // </div>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
