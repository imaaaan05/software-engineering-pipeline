import BookList from "./components/BookList"
import books from "./data/books"

function App() {
  return (
    <div>
      <h1>Library Reservation App</h1>

      <BookList books={books} />
    </div>
  )
}

export default App