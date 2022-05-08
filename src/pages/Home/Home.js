import React from "react"
import Books from "../../components/Books/Books"
import warehouse from "../../assets/warehouse.webp"
import Author from "../../components/Author/Author"
import Search from "../../components/search/search"

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img
          className="w-[1536px] md:h-[500px] h-[300px] object-cover"
          src={warehouse}
          alt=""
        />
        <div className="group bg-transparent hover:bg-[rgba(0,0,0,.6)] md:h-[500px] h-[300px] absolute top-0 w-full transition-colors">
          <div className="flex justify-center items-center h-full text-center">
            <h2 className="group-hover:text-white text-transparent text-4xl font-bold">
              Inventory of all the best sellers
            </h2>
          </div>
        </div>
      </div>
      <Search></Search>

      <Author></Author>

      <Books></Books>
    </div>
  )
}

export default Home
