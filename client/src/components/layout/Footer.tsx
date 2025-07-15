import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-amber-400" />
              <h3 className="text-2xl font-bold">BookHaven</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner in discovering amazing books. We believe every book has the power to change lives.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Bestsellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Fiction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Non-Fiction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Children's Books</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-400">123 Book Street, Reading City, RC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-400">+ (91) 123-456-7809</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-400">hello@bookhaven.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BookHaven. All rights reserved. Made with ❤️ for book lovers.</p>
        </div>
      </div>
    </footer>
  );
}