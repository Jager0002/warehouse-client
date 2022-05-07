import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useFirebase = () => {
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  console.log(location.state?.from?.pathname);
  useEffect(() => {
    if (createUser || signInUser) {
      navigate(from, { replace: true });
    }
  }, [createUser, signInUser, from, navigate]);

  useEffect(() => {
    if (createUserError || signInError) {
      const e = createUserError || signInError;
      const error = e?.message.split(" ");
      toast.error(
        error[error.length - 1].replace(/auth/g, "").replace(/[-/()]/g, " ")
      );
    }
  }, [createUserError, signInError]);

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(email, password);
  };
  return { handleSignUp, handleSignIn, createLoading };
};

export default useFirebase;
