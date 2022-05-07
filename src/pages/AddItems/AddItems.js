import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import auth from "../../firebase/firebase.init"

const AddItems = () => {
  const [user] = useAuthState(auth)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const { name, description, price, quantity, supplier, url } = data

    const email = user.email
    fetch("http://localhost:5000/book", {
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
        url,
        email,
      }),
    }).then((res) => console.log(res))
  }
  return (
    <div>
      <div className="w-3/5 md:w-1/3 mx-auto">
        <h2 className="font-semibold text-3xl text-center mt-4">
          Add new Item
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col m-2">
            <label className="font-medium text-xl" htmlFor="name">
              Name
            </label>
            <input
              className="border p-2"
              id="name"
              type="text"
              placeholder="enter name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium text-xl" htmlFor="name">
              Supplier
            </label>
            <input
              className="border p-2"
              id="supplier"
              type="text"
              placeholder="supplier"
              {...register("supplier")}
            />
          </div>

          <div className="flex flex-col m-2">
            <label className="font-medium text-xl" htmlFor="price">
              Price
            </label>
            <input
              className="border p-2"
              id="price"
              type="number"
              placeholder="enter price"
              {...register("price")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium text-xl" htmlFor="price">
              Quantity
            </label>
            <input
              className="border p-2"
              id="quantity"
              type="number"
              placeholder="enter Quantity"
              {...register("quantity")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium text-xl" htmlFor="url">
              Image url
            </label>
            <input
              className="border p-2"
              id="url"
              type="text"
              placeholder="Enter Url"
              {...register("url")}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium text-xl" htmlFor="name">
              Description
            </label>
            <textarea
              className="border p-2"
              id="description"
              type="text"
              rows="5"
              placeholder="description"
              {...register("description")}
            />
          </div>
          <div className="text-center">
            <input
              className="m-2 cursor-pointer border bg-slate-700 text-white p-4 px-8 hover:bg-slate-600"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItems
