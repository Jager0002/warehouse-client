import React from "react"
import { Link } from "react-router-dom"
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import useBooks from "../../hooks/useBooks"

const ManageInventories = () => {
  const { books, setBooks } = useBooks()

  const handleDelete = (id) => {
    const url = "http://localhost:5000/book/delete"

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        const rest = books.filter((book) => book._id !== id)
        setBooks(rest)
      })
  }

  return (
    <div className="w-11/12 md:w-3/5 mx-auto my-10">
      <div>
        <div className="grid grid-cols-5 justify-items-center bg-slate-700 text-white w-full text-center p-6">
          <p>name</p>
          <p>price</p>
          <p>quantity</p>
          <p>supplier</p>
          <p>stockout</p>
        </div>
        {books?.map((book) => (
          <InventoryItem
            key={book._id}
            book={book}
            handleDelete={handleDelete}
          ></InventoryItem>
        ))}
      </div>

      <div
        className="bg-slate-700 text-white w-1/2
                py-3 mt-4 mx-auto text-center"
      >
        <Link to={"/add_item"}>Add new Item</Link>
      </div>
    </div>
  )
}

export default ManageInventories
