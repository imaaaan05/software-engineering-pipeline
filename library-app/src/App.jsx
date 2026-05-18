import { useState } from "react"
import AddBookForm from "./components/AddBookForm"
import BookList from "./components/BookList"
import booksData from "./data/books"

function App() {
  const [books, setBooks] = useState(booksData)

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
    <div>
      <h1>Library Reservation App</h1>

      <AddBookForm onAddBook={addBook} />

      <BookList
        books={books}
        toggleReservation={toggleReservation}
      />
    </div>
  )
}

export default App