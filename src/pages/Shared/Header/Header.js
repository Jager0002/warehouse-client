import React from "react"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../../firebase/firebase.init"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import logo from "../../../assets/logo.png"
import CustomLink from "../../../components/CustomLink/CustomLink"

const Header = () => {
  const [user] = useAuthState(auth)
  const [toggle, setToggle] = useState(false)
  return (
    <div className="bg-white border-b-2 border-theme">
      <div className="px-10 lg:px-48 flex justify-between text-theme h-20 items-center">
        <div className="">
          <Link to="/">
            <img className="w-10 ml-12 inline m-4" src={logo} alt="" />
            <span>Boi Bari</span>
          </Link>
        </div>

        {/* desktop nav */}
        <div className="space-x-6 hidden md:block">
          <CustomLink to="/" className="p-3 rounded">
            Home
          </CustomLink>
          {user ? (
            <>
              <CustomLink className="p-3 rounded" to="/manage_inventory">
                Manage Inventory
              </CustomLink>
              <CustomLink className="p-3 rounded" to="/add_item">
                Add Item
              </CustomLink>
              <CustomLink className="p-3 rounded" to="/my_items">
                My Items
              </CustomLink>
              <button onClick={() => signOut(auth)}>Signout</button>
            </>
          ) : (
            <CustomLink className="p-3 rounded" to="/sign_in">
              Sign In
            </CustomLink>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <FontAwesomeIcon icon={!toggle ? faBars : faXmark} />
          </button>
        </div>

        {/* mobile nav */}
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } flex flex-col text-theme md:hidden`}
      >
        <CustomLink className="hover:bg-theme py-2 px-10" to="/">
          Home
        </CustomLink>
        {user ? (
          <>
            <CustomLink
              className="hover:bg-theme py-2 px-10"
              to="/manage_inventory "
            >
              Manage Inventory
            </CustomLink>
            <CustomLink className="hover:bg-theme py-2 px-10" to="/add_item ">
              Add Item
            </CustomLink>
            <CustomLink className="hover:bg-theme py-2 px-10" to="/my_items ">
              My Items
            </CustomLink>
            <button
              className="bg-theme py-2 px-10 text-white"
              onClick={() => signOut(auth)}
            >
              Signout
            </button>
          </>
        ) : (
          <Link
            className="bg-theme text-white py-2 block text-center"
            to="/sign_in "
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
