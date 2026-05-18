import { useState } from "react"

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title.trim() || !author.trim()) {
      return
    }

    onAddBook({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: title.trim(),
      author: author.trim(),
      reserved: false,
    })

    setTitle("")
    setAuthor("")
  }

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>

      <div className="form-row">
        <label htmlFor="book-title">Title</label>
        <input
          id="book-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
      </div>

      <div className="form-row">
        <label htmlFor="book-author">Author</label>
        <input
          id="book-author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />
      </div>

      <button className="button" type="submit">
        Add Book
      </button>
    </form>
  )
}

export default AddBookForm
