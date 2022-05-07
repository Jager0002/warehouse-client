import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-slate-700 px-40 py-20 md:ustify-items-center text-white mt-auto">
      <div className="flex flex-col mx-auto">
        <h2 className="mb-4">Menu</h2>
        <Link to="/">Home</Link>
        <Link to="/">Route</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">Route</Link>
      </div>
      <div className="mx-auto">
        <h2 className="mb-4 text-center">Features</h2>
        <p>website features</p>
        <p>website features</p>
        <p>website features</p>
        <p>website features</p>
      </div>
      <div className="mx-auto">
        <h2 className="mb-4 text-center">Social Media</h2>
        <div>
          <img src="icon here" alt="" />
          boibari/1245/facebook.com
        </div>
        <div>
          <img src="icon here" alt="" />
          boibari/1245/twitter.com
        </div>
        <div>
          <img src="icon here" alt="" />
          boibari/1245/instagram.com
        </div>
      </div>
    </div>
  )
}

export default Footer
