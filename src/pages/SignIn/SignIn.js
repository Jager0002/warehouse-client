import React, { useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useFirebase from "../../hooks/useFirebase";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { handleSignIn } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const onSubmit = (data) => {
    handleSignIn(data.email, data.password);
    reset();
  };

  // const handleReset = async (email) => {
  //   await sendPasswordResetEmail(email);
  // };

  return loading ? (
    <Loader></Loader>
  ) : (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="border"
            type="email"
            id="email"
            placeholder="enter email address"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border"
            type="password"
            id="password"
            placeholder="enter password"
            {...register("password")}
          />
        </div>

        {/* reset purpose  */}
        {/* <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="resetEmail">RESET EMAIL</label>
          <input type="email" id="resetEmail" {...register("resetEmail")} />
          <button onClick={handleReset}>Reset password</button>
          </form>
        </div> */}

        <input type="submit" value="Sign In" />
      </form>

      <div>
        <Link to="/sign_up">dont't have account?</Link>
        <button onClick={() => signInWithGoogle()}>sign in with google</button>
      </div>
    </div>
  );
};

export default SignIn;
