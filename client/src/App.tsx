import React, { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AuthModal from './components/modals/AuthModal';
import { AppProvider } from "./context/AppContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAuthClick = () => {
    setIsAuthOpen(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header onCartClick={handleCartClick} onAuthClick={handleAuthClick} />
        <Footer />
         <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </div>
    </AppProvider>
  )
}

export default App;
