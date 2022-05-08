import React from "react"
import { useNavigate } from "react-router-dom"

const SingleBook = ({ book }) => {
  const { name, image, description, price, quantity, supplier, _id } = book
  const navigate = useNavigate()

  return (
    <div className="p-5 rounded-md cursor-pointer hover:shadow-2xl transition-all">
      <div>
        <h2 className="text-2xl ">{name}</h2>
        <p className="text-xl">Supplire: {supplier}</p>
      </div>
      <div className="grid grid-cols-3 my-2 items-center justify-items-center mt-6 gap-6">
        <div className="col-span-2">
          <img
            className="h-[350px] object-cover hover:scale"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-medium">{price}$</h3>
          <p className="text-xl">quantity: {quantity}</p>
          <button className="" onClick={() => navigate(`inventory/${_id}`)}>
            <p className="p-3 px-5 bg-light text-theme font-medium">update</p>
          </button>
        </div>
      </div>
      <p className="mt-6">{description}</p>
    </div>
  )
}

export default SingleBook
