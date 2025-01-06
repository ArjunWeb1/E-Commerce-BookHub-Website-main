import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './ProductList.css';

const ProductList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=20`
        );

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        const bookList = data.items.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title || 'No Title',
          author: item.volumeInfo.authors?.[0] || 'Unknown Author',
          price: Number((Math.random() * 20 + 10).toFixed(2)), // Ensure the price is a number
          imageURL: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/100x150?text=No+Image',
        }));

        setBooks(bookList);
      } catch (error) {
        console.error('Error fetching books:', error.message);
        setError('Failed to load books. Showing mock data.');
        setBooks([
          {
            id: 1,
            title: 'Mock Book 1',
            author: 'Author 1',
            price: 10.99,
            imageURL: 'https://via.placeholder.com/100x150?text=Mock+1',
          },
          {
            id: 2,
            title: 'Mock Book 2',
            author: 'Author 2',
            price: 12.99,
            imageURL: 'https://via.placeholder.com/100x150?text=Mock+2',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (book) => {
    if (!user) {
      alert('Please log in to add books to your cart!');
      return;
    }
    addToCart(book, 1);
  };

  return (
    <div className="product-list">
      <h2>Book List</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {loading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="books-container">
          {filteredBooks.length === 0 ? (
            <p>No books found</p>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <img src={book.imageURL} alt={book.title} />
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Price: ${book.price.toFixed(2)}</p>
                <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
