import './App.css';
import Navbar from './components/Navbar';
import NavbarAchievements from './components/NavbarAchievements';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from "./pages/Gallery";
import Footer from './components/Footer';
import SecretPage from "./pages/SecretPage";


function AppContent() {
  const location = useLocation();

  const isGalleryPage = location.pathname.toLowerCase().includes("gallery");

  return (
    <>
      { <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/secret" element={<SecretPage />} />  
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Routes>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
