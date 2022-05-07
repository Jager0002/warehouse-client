import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import auth from "../../firebase/firebase.init"

const MyItems = () => {
  const [myBooks, setMyBooks] = useState([])
  const [user] = useAuthState(auth)

  const handleDelete = (id) => {
    const url = "https://shrouded-plateau-40134.herokuapp.com/book/delete"

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        const rest = myBooks.filter((book) => book._id !== id)
        setMyBooks(rest)
      })
  }

  useEffect(() => {
    const email = user.email
    fetch(`https://shrouded-plateau-40134.herokuapp.com/myBooks/${email}`)
      .then((res) => res.json())
      .then((data) => setMyBooks(data))
  }, [user])

  return (
    <div>
      {
        <div className="w-11/12 md:w-3/5 mx-auto my-10">
          <div>
            <div className="grid grid-cols-5 justify-items-center bg-light text-theme font-semibold w-full text-center p-6">
              <p>name</p>
              <p>price</p>
              <p>quantity</p>
              <p>supplier</p>
              <p>stockout</p>
            </div>
            {myBooks?.map((book) => (
              <InventoryItem
                key={book._id}
                book={book}
                handleDelete={handleDelete}
              ></InventoryItem>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default MyItems
