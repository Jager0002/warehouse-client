import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Loader from "../../components/Loader/Loader"
import useFirebase from "../../hooks/useFirebase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const SignUp = () => {
  const { handleSignUp, createLoading } = useFirebase()
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      toast.error("invalid email")
      return
    }
    if (data.password.length < 6) {
      toast.error("must be more than 6 charcter")
      return
    }
    if (data.password !== data.rePassword) {
      toast.error("password does not match")
      return
    }
    handleSignUp(data.email, data.password)
    reset()
  }
  return createLoading ? (
    <Loader></Loader>
  ) : (
    <div className="w-4/5 md:w-3/5 lg:w-1/3 mx-auto mt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl font-semibold text-center mb-16">Sign Up</h2>
        <div className="mb-8 relative">
          <input
            className="flex flex-col bg-gray-100 p-3 w-full outline-none"
            id="name"
            type="text"
            placeholder="enter full name"
            {...register("firstName")}
          />
          <div className="absolute right-5 top-3 text-xl">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </label>
          </div>
        </div>

        <div className="mb-8 relative">
          <input
            className="flex flex-col bg-gray-100 p-3 w-full outline-none"
            type="email"
            id="email"
            placeholder="enter email address"
            {...register("email")}
          />
          <div className="absolute right-5 top-3 text-xl">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </label>
          </div>
        </div>

        <div className="mb-8 relative">
          <input
            className="flex flex-col bg-gray-100 p-3 w-full outline-none"
            type="password"
            id="password"
            placeholder="enter password"
            {...register("password")}
          />
          <div className="absolute right-5 top-3 text-xl">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </label>
          </div>
        </div>

        <div className="mb-8 relative">
          <input
            className="flex flex-col bg-gray-100 p-3 w-full outline-none"
            type="password"
            id="re_password"
            placeholder="re enter password"
            {...register("rePassword")}
          />
          <div className="absolute right-5 top-3 text-xl">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Sign up"
          className="w-3/5 block mx-auto bg-theme hover:bg-accent text-white p-3 rounded-md mt-4 cursor-pointer"
        />
      </form>
      <Link to="/sign_in">
        <p className="text-center underline  mt-4">I have a account</p>
      </Link>
    </div>
  )
}

export default SignUp
