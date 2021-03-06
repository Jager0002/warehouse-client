import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const Inventory = () => {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [change, setChange] = useState(true)

  useEffect(() => {
    fetch(`https://shrouded-plateau-40134.herokuapp.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data)
      })
  }, [id, change])

  const handleDeliver = () => {
    const quantity = parseInt(book.quantity - 1)
    const url = "https://shrouded-plateau-40134.herokuapp.com/book/addStock"
    const info = { id: book._id, quantity: quantity }
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setChange(!change)
        console.log(data)
      })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const previousQuantity = book.quantity
    let currentQuantity = e.target.quantity.value
    if (!currentQuantity) {
      toast.warning("please enter quantity")
      return
    }
    currentQuantity = parseInt(currentQuantity) + parseInt(previousQuantity)

    const url = "https://shrouded-plateau-40134.herokuapp.com/book/addStock"

    const info = { id: book._id, quantity: currentQuantity }
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="mb-16">
      <div className="flex justify-center bg-[#FAF9F6] p-8">
        <img
          className="w-[222px] h-[335px] object-cover hover:scale"
          src={book.image}
          alt="book banner"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-4/5 md:w-3/5 mx-auto mt-20 gap-6 items-center">
        <div className="md:col-span-2 w-4/5">
          <h2 className="text-2xl font-medium mb-4">{book.name}</h2>
          <p>{book.description}</p>
          <p className="mt-4">Supplier: {book.supplier}</p>
          <p className="mt-2">Product ID: {book._id}</p>
          <p className="mt-2">Product Quantity: {book.quantity}</p>
          {book.quantity <= 0 && <p className="mt-2">Sold Out</p>}
          <button
            className="bg-theme p-3 text-white rounded-md mt-2 hover:bg-accent"
            onClick={handleDeliver}
          >
            Delivered
          </button>
        </div>
        <div>
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col">
              <label htmlFor="quantity">Books quantity</label>
              <input
                className="p-3 border my-4 outline-none"
                type="number"
                name="quantity"
                placeholder="new stock quantity"
              />
              <button className="bg-theme text-white py-3 ">add stock</button>
              <Link
                to={"/manage_inventory"}
                className="bg-light text-theme
              py-3 mt-4 text-center"
              >
                Manage Inventories
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Inventory
