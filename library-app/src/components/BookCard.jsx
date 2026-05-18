function BookCard({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>

      {book.reserved ? (
        <button>Cancel Reservation</button>
      ) : (
        <button>Reserve</button>
      )}
    </div>
  )
}

export default BookCard