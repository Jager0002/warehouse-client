import React, { useEffect, useState } from "react"
import auth from "../../firebase/firebase.init"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import useFirebase from "../../hooks/useFirebase"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const { handleSignIn } = useFirebase()
  const { register, handleSubmit, reset } = useForm()
  const location = useLocation()
  const navigate = useNavigate()

  let from = location.state?.from?.pathname || "/"

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true })
    }
  }, [user, from, navigate])

  const onSubmit = (data) => {
    handleSignIn(data.email, data.password)
    reset()
  }

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="w-4/5 md:w-3/5 lg:w-1/3 mx-auto my-16">
      <h2 className="text-3xl font-semibold text-center mb-16">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col relative mb-8">
          <input
            className="bg-gray-100 outline-none p-3 focus:border-slate-700"
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
        <div className="flex flex-col relative mb-4">
          <input
            className="bg-gray-100 outline-none p-3 focus:border-slate-700"
            type="password"
            id="password"
            placeholder="enter password"
            {...register("password")}
          />
          <div className="absolute right-5 top-3 text-xl">
            <label htmlFor="password">
              {" "}
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </label>
          </div>
        </div>
        <div className="flex justify-between underline">
          <Link to="/sign_up">Dont't have account?</Link>
          <Link to="/reset_password">Forget Password?</Link>
        </div>
        <div className="w-3/5 bg-theme mx-auto p-3 text-center text-white rounded-md my-5 cursor-pointer hover:bg-accent">
          <input type="submit" value="Sign In" />
        </div>

        <button
          onClick={() => signInWithGoogle()}
          className="w-3/5 bg-light p-3 text-theme mx-auto block rounded-md cursor-pointer"
        >
          sign in with google
        </button>
      </form>
    </div>
  )
}

export default SignIn
