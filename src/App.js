import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign_in" element={<SignIn />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
