import React, {useState } from "react";
import { Search, ShoppingCart, User, Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
    onCartClick: () => void;
    onAuthClick: () => void;
}

export default function Header({ onCartClick, onAuthClick }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* logo */}
                    <div className="flex items-center space-x-2">
                        <BookOpen className="h-8 w-8 text-amber-600" />
                        <h1 className="text-2xl font-bold text-amber-800">BookHaven</h1>
                    </div>
                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search books, authors, or genres..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick={onCartClick}
                            className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            <ShoppingCart className="h-6 w-6" />
                        </button>
                        <button
                            onClick={onAuthClick}
                            className="flex items-center space-x-2 p-2 text-gray-600 hover:text-amber-600 transition-colors"
                        >
                            <User className="h-6 w-6" />
                            <span className="text-sm">Sign In'</span>
                        </button>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                {/* Mobile Search */}
                <div className="md:hidden pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={onCartClick}
                                className="flex items-center space-x-3 p-2 text-gray-600 hover:text-amber-600 transition-colors"
                            >
                                <ShoppingCart className="h-6 w-6" />
                                <span>Cart</span>
                            </button>

                            <button
                                onClick={onAuthClick}
                                className="flex items-center space-x-3 p-2 text-gray-600 hover:text-amber-600 transition-colors"
                            >
                                <User className="h-6 w-6" />
                                <span>Sign In</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}