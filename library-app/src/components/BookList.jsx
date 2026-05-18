import BookCard from "./BookCard"

function BookList({ books, toggleReservation }) {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          toggleReservation={toggleReservation}
        />
      ))}
    </div>
  )
}

export default BookList