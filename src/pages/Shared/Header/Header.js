import React from "react"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../../firebase/firebase.init"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [user] = useAuthState(auth)
  const [toggle, setToggle] = useState(false)
  return (
    <div className="bg-slate-700 ">
      <div className="px-10 lg:px-48 flex justify-between text-white h-20 items-center">
        <div className="">
          <Link to="/">Logo</Link>
        </div>

        {/* desktop nav */}
        <div className="space-x-6 hidden md:block">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/manage_inventory">Manage Inventory</Link>
              <Link to="/add_item">Add Item</Link>
              <Link to="/my_items">My Items</Link>
              <button onClick={() => signOut(auth)}>Signout</button>
            </>
          ) : (
            <Link to="/sign_in">Sign In</Link>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon
              icon={!toggle ? faBars : faXmark}
            />
          </button>
        </div>

        {/* mobile nav */}
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } flex flex-col text-white md:hidden`}
      >
        <Link className="hover:bg-slate-800 py-2 px-10" to="/">
          Home
        </Link>
        {user ? (
          <>
            <Link
              className="hover:bg-slate-800 py-2 px-10"
              to="/manage_inventory "
            >
              Manage Inventory
            </Link>
            <Link className="hover:bg-slate-800 py-2 px-10" to="/add_item ">
              Add Item
            </Link>
            <Link className="hover:bg-slate-800 py-2 px-10" to="/my_items ">
              My Items
            </Link>
            <button
              className="bg-gray-800 py-2 px-10"
              onClick={() => signOut(auth)}
            >
              Signout
            </button>
          </>
        ) : (
          <Link className="hover:bg-slate-800 py-2" to="/sign_in ">
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
