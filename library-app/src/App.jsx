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

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Library Reservation App</h1>
        <p className="app-subtitle">
          Reserve books, manage your collection, and keep data saved locally.
        </p>
      </header>

      <div className="top-panels">
        <RegisterForm />
        <AddBookForm onAddBook={addBook} />
      </div>

      <section className="book-grid">
        <BookList
          books={books}
          toggleReservation={toggleReservation}
        />
      </section>
    </div>
  )
}

export default App