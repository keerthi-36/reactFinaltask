import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import DestinationDetails from "./pages/DestinationDetails";
import India from "./pages/India";
import International from "./pages/International";
import Footer from "./components/Footer";

// Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>

     
      <Navbar />

      
      <Routes>

       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />

        {/* Nested / Filter Pages */}
        <Route path="/destinations/india" element={<India />} />
        <Route path="/destinations/international" element={<International />} />

        {/* Dynamic Route */}
        <Route path="/destination/:id" element={<DestinationDetails />} />

      </Routes>
      <Footer/>

    </div>
  );
};

export default App;