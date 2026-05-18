function BookCard({ book, toggleReservation }) {
  return (
    <article className="book-card">
      <div className="book-card-content">
        <h3>{book.title}</h3>
        <p className="book-author">{book.author}</p>
      </div>

      <div className="book-card-actions">
        <button
          className="button secondary"
          onClick={() => toggleReservation(book.id)}
        >
          {book.reserved ? "Cancel" : "Reserve"}
        </button>

        {book.reserved && <p className="status-badge">Reserved</p>}
      </div>
    </article>
  )
}

export default BookCard