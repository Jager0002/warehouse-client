import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"
import auth from "../../firebase/firebase.init"

const AddItems = () => {
  const [user] = useAuthState(auth)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const { name, description, price, quantity, supplier, image } = data

    const email = user.email
    fetch("https://shrouded-plateau-40134.herokuapp.com/book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        description,
        name,
        price,
        quantity,
        supplier,
        image,
        email,
      }),
    }).then((res) => {
      toast.success("item added")
      Navigate("/manage_inventory")
    })
  }
  return (
    <div>
      <div className="w-3/5 md:w-1/3 mx-auto">
        <h2 className="font-semibold text-3xl text-center mt-4">
          Add new Item
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="name"
              type="text"
              placeholder="enter name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="name">
              Supplier
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="supplier"
              type="text"
              placeholder="supplier"
              {...register("supplier")}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="price">
              Price
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="price"
              type="number"
              placeholder="enter price"
              {...register("price")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="price">
              Quantity
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="quantity"
              type="number"
              placeholder="enter Quantity"
              {...register("quantity")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="image">
              Image url
            </label>
            <input
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="image"
              type="text"
              placeholder="Enter image Url"
              {...register("image")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="name">
              Description
            </label>
            <textarea
              className=" p-3 mt-2 outline-none bg-gray-100"
              id="description"
              type="text"
              rows="5"
              placeholder="description"
              {...register("description")}
            />
          </div>
          <div className="text-center">
            <input
              className="m-2 cursor-pointer border bg-theme text-white p-4 px-8 hover:bg-accent rounded-md"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItems
