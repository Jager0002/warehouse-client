import useBooks from "../../hooks/useBooks"
import Loader from "../Loader/Loader"
import SingleBook from "../SingleBook/SingleBook"

const Books = () => {
  const { books, loading } = useBooks(6)
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="mb-16">
      <h2 className="text-2xl font-medium py-3 px-4 w-fit mx-auto bg-light text-theme rounded my-16">
        Inventory Items
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {books?.map((book) => (
          <SingleBook key={book._id} book={book}></SingleBook>
        ))}
      </div>
    </div>
  )
}

export default Books
