import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import auth from "../../firebase/firebase.init"
import Popup from "../../components/Popup/Popup"

const MyItems = () => {
  const [myBooks, setMyBooks] = useState([])
  const [popup, setPopup] = useState(false)
  const [deleteId, setdeleteId] = useState("")
  const [user] = useAuthState(auth)

  const handleDelete = () => {
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
        const rest = myBooks.filter((book) => book._id !== deleteId)
        setMyBooks(rest)
        setPopup(false)
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

  useEffect(() => {
    const email = user.email
    fetch(`https://shrouded-plateau-40134.herokuapp.com/myBooks/${email}`)
      .then((res) => res.json())
      .then((data) => setMyBooks(data))
  }, [user])

  return (
    <>
      {" "}
      {popup && <Popup handleDelete={handleDelete} setPopup={setPopup}></Popup>}
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
              handlePopup={handlePopup}
            ></InventoryItem>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyItems
