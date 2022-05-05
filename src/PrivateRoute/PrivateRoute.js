import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import auth from "../firebase/firebase.init";

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/sign_in" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
