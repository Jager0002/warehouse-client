import React from "react"
import { Link } from "react-router-dom"
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import useBooks from "../../hooks/useBooks"
import { useState, useEffect } from "react"
import Popup from "../../components/Popup/Popup"

const ManageInventories = () => {
  const { books, setBooks } = useBooks()
  const [popup, setPopup] = useState(false)
  const [deleteId, setdeleteId] = useState("")

  const handleDelete = () => {
    console.log(deleteId)
    const url = "https://shrouded-plateau-40134.herokuapp.com/book/delete"

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: deleteId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPopup(false)
        const rest = books.filter((book) => book._id !== deleteId)
        setBooks(rest)
      })
  }

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [popup])
  const handlePopup = (_id) => {
    setdeleteId(_id)

    setPopup(true)
  }

  return (
    <>
      {popup && <Popup handleDelete={handleDelete} setPopup={setPopup}></Popup>}
      <div className="w-11/12 md:w-3/5 mx-auto my-10">
        <div>
          <div className="grid grid-cols-5 justify-items-center bg-light text-theme w-full text-center p-6 font-semibold">
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
              handlePopup={handlePopup}
            ></InventoryItem>
          ))}
        </div>
        <div
          className="bg-light text-theme w-1/2 font-medium
                  py-3 mt-4 mx-auto text-center rounded-md"
        >
          <Link to={"/add_item"}>Add new Item</Link>
        </div>
      </div>
    </>
  )
}

export default ManageInventories
