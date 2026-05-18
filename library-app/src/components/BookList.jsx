import BookCard from "./BookCard"

function BookList({ books, toggleReservation }) {
  return (
    <div>
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