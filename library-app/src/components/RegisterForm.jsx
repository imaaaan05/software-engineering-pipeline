import { useEffect, useState } from "react"

function RegisterForm() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const savedUser = localStorage.getItem("libraryUser")

    if (savedUser) {
      const { email: savedEmail } = JSON.parse(savedUser)
      setEmail(savedEmail)
      setSuccess(true)
    }
  }, [])

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setError("Email is required.")
      setSuccess(false)
      return
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.")
      setSuccess(false)
      return
    }

    localStorage.setItem(
      "libraryUser",
      JSON.stringify({ email: trimmedEmail })
    )

    setError("")
    setSuccess(true)
    setEmail(trimmedEmail)
  }

  return (
    <section className="card register-card">
      <h2>User Registration</h2>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <button className="button" type="submit">
          Register
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && (
        <p className="success-message">
          Registration successful! Logged in as {email}.
        </p>
      )}
    </section>
  )
}

export default RegisterForm
