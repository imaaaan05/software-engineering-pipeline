function BookCard({ book, toggleReservation }) {
  return (
    <div>
      <h3>{book.title}</h3>

      <p>{book.author}</p>

      <button onClick={() => toggleReservation(book.id)}>
        {book.reserved
          ? "Cancel Reservation"
          : "Reserve"}
      </button>

      {book.reserved && <p>Reserved</p>}
    </div>
  )
}

export default BookCard