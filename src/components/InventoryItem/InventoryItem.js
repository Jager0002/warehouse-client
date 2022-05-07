import React from "react"

const InventoryItem = ({ book, handleDelete }) => {
  const { name, price, quantity, supplier, _id } = book
  return (
    <div className="grid grid-cols-5 justify-items-center border border-t-0 p-4 items-center">
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{supplier}</p>
      <button
        className="bg-slate-700 text-white
                py-3 text-center px-4"
        onClick={() => handleDelete(_id)}
      >
        delete
      </button>
    </div>
  )
}

export default InventoryItem
