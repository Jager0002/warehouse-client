import React from "react";
import auth from "../../firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <Link to="/sign_up">dont't have account?</Link>
      <button onClick={() => signInWithGoogle()}>sign in with google</button>
    </div>
  );
};

export default SignIn;
