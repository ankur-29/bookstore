import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import BookCard from '../common/BookCard';
import { books } from '../../data/books';
import type { Book } from '../../types';

interface FeaturedBooksProps {
  onBookClick: (book: Book) => void;
}

export default function FeaturedBooks({ onBookClick }: FeaturedBooksProps) {
  const featuredBooks = books.filter(book => book.featured);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
            <p className="text-gray-600 mt-2">Discover our handpicked selection of must-read books</p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium">
            <span>View All</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onBookClick={onBookClick}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium">
            <span>View All Featured Books</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}