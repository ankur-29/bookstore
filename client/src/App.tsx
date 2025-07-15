import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import FeaturedBooks from './components/home/FeaturedBooks';
import BookCatalog from './components/catalog/BookCatalog';
import BookDetailModal from './components/modals/BookDetailModal';
import CartModal from './components/modals/CartModal';
import AuthModal from './components/modals/AuthModal';
import CheckoutModal from './components/checkout/CheckoutModal';
import type { Book } from './types';

function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAuthClick = () => {
    setIsAuthOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header
          onCartClick={handleCartClick}
          onAuthClick={handleAuthClick}
        />
        
        <main>
          {!showCatalog ? (
            <>
              <Hero />
              <FeaturedBooks onBookClick={handleBookClick} />
              <div className="text-center py-12">
                <button
                  onClick={() => setShowCatalog(true)}
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Browse All Books
                </button>
              </div>
            </>
          ) : (
            <BookCatalog onBookClick={handleBookClick} />
          )}
        </main>

        <Footer />

        {/* Modals */}
        <BookDetailModal
          book={selectedBook}
          isOpen={!!selectedBook}
          onClose={() => setSelectedBook(null)}
        />

        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />

        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={handleCheckoutClose}
        />
      </div>
    </AppProvider>
  );
}

export default App;