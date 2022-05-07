import React from "react"
import { useState } from "react"
import Popup from "../Popup/Popup"

const InventoryItem = ({ book, handlePopup }) => {
  const { name, price, quantity, supplier, _id } = book
  return (
    <>
      <div className="|">
        <div className="grid grid-cols-5 justify-items-center border border-t-0 p-4 items-center">
          <p>{name}</p>
          <p>{price}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <button
            className="bg-accent text-white
                    py-3 text-center px-4 rounded-md"
            onClick={() => handlePopup(_id)}
          >
            delete
          </button>
        </div>
      </div>
    </>
  )
}

export default InventoryItem
