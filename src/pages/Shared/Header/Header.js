import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-blue-800 px-48 flex justify-between text-white h-20 items-center">
      <div className="">
        <h2>logo</h2>
      </div>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/manage_inventory">Manage Inventory</Link>
            <Link to="/my_items">My Items</Link>
            <button onClick={() => signOut(auth)}>Signout</button>
          </>
        ) : (
          <Link to="/sign_in">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
