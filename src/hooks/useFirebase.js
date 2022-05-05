import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { useEffect } from "react";

const useFirebase = () => {
  const [createUserWithEmailAndPassword, user, loading, createUserError] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (createUserError) {
      const error = createUserError?.message.split(" ");
      toast.error(
        error[error.length - 1].replace(/auth/g, "").replace(/[-/()]/g, " ")
      );
    }
  }, [createUserError]);

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  };
  return { handleSignUp };
};

export default useFirebase;
