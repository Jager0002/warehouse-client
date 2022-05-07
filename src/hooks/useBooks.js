import { useEffect, useState } from "react"

const useBooks = (quantity) => {
  const [books, setBooks] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(
      `https://shrouded-plateau-40134.herokuapp.com/books?quantity=${quantity}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
        setLoading(false)
      })
  }, [quantity])
  return { books, setBooks, loading }
}

export default useBooks
