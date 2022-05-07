import useBooks from "../../hooks/useBooks"
import Loader from "../Loader/Loader"
import SingleBook from "../SingleBook/SingleBook"

const Books = () => {
  const { books, loading } = useBooks(6)
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
      {books?.map((book) => (
        <SingleBook key={book._id} book={book}></SingleBook>
      ))}
    </div>
  )
}

export default Books
