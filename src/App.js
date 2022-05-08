import Header from "./pages/Shared/Header/Header"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn/SignIn"
import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import "react-toastify/dist/ReactToastify.min.css"
import { ToastContainer } from "react-toastify"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import ManageInventories from "./pages/ManageInventories/ManageInventories"
import MyItems from "./pages/MyItems/MyItems"
import AddItems from "./pages/AddItems/AddItems"
import NotFound from "./pages/Shared/NotFound/NotFound"
import Inventory from "./pages/Inventory/Inventory"
import Footer from "./pages/Shared/Footer/Footer"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import Blog from "./pages/Blog/Blog"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/sign_in" element={<SignIn />}></Route>
        <Route path="/reset_password" element={<ResetPassword />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
        <Route
          path="/manage_inventory"
          element={
            <PrivateRoute>
              <ManageInventories />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/my_items"
          element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/add_item"
          element={
            <PrivateRoute>
              <AddItems />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
