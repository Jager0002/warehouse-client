import { useEffect, useState } from "react"

const useBooks = (quantity) => {
  const [books, setBooks] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/books?quantity=${quantity}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
        setLoading(false)
      })
  }, [quantity])
  return { books, setBooks, loading }
}

export default useBooks
