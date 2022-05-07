import React from "react"
import Books from "../../components/Books/Books"
import warehouse from "../../assets/warehouse.webp"

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img
          className="w-[1536px] h-[500px] object-cover"
          src={warehouse}
          alt=""
        />
        <div className="bg-transparent hover:bg-() h-[500px] absolute top-0 w-full"></div>
      </div>
      <Books></Books>
    </div>
  )
}

export default Home
