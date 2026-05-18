import { useEffect, useState } from "react"
import AddBookForm from "./components/AddBookForm"
import BookList from "./components/BookList"
import RegisterForm from "./components/RegisterForm"
import booksData from "./data/books"

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("libraryBooks")
    return saved ? JSON.parse(saved) : booksData
  })
  const [query, setQuery] = useState("")

  useEffect(() => {
    localStorage.setItem("libraryBooks", JSON.stringify(books))
  }, [books])

  const toggleReservation = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id
        ? { ...book, reserved: !book.reserved }
        : book
    )

    setBooks(updatedBooks)
  }

  const addBook = (newBook) => {
    setBooks((currentBooks) => [newBook, ...currentBooks])
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Library Reservation App</h1>
        <p className="app-subtitle">
          Reserve books, manage your collection, and keep data saved locally.
        </p>

        <div className="search-bar">
          <label htmlFor="book-search">Search by title</label>
          <input
            id="book-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search books by title..."
          />
        </div>
      </header>

      <div className="top-panels">
        <RegisterForm />
        <AddBookForm onAddBook={addBook} />
      </div>

      <section className="book-grid">
        <BookList
          books={filteredBooks}
          toggleReservation={toggleReservation}
        />
      </section>
    </div>
  )
}

export default App