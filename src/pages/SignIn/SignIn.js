import React, { useEffect } from "react";
import auth from "../../firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useFirebase from "../../hooks/useFirebase";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { handleSignIn } = useFirebase();
  const { register, handleSubmit, reset } = useForm();

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
