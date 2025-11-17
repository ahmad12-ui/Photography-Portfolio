import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HireMe from "./pages/HireMe";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <header>
          <Navbar />
        </header>
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
