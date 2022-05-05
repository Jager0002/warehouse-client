import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import useFirebase from "../../hooks/useFirebase";

const SignUp = () => {
  const { handleSignUp, createLoading } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      toast.error("invalid email");
      return;
    }
    if (data.password.length < 6) {
      toast.error("must be more than 6 charcter");
      return;
    }
    if (data.password !== data.rePassword) {
      toast.error("password does not match");
      return;
    }
    handleSignUp(data.email, data.password);
    reset();
  };
  return createLoading ? (
    <Loader></Loader>
  ) : (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            className="border"
            id="name"
            type="text"
            placeholder="enter full name"
            {...register("firstName")}
          />
        </div>
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
        <div>
          <label htmlFor="re_password">Re Enter Password</label>
          <input
            className="border"
            type="password"
            id="re_password"
            placeholder="re enter password"
            {...register("rePassword")}
          />
        </div>
        <input type="submit" vlaue="sign up" />
      </form>
    </div>
  );
};

export default SignUp;
