import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const SignUp = () => {
  const {handleSignUp} = useFirebase()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    handleSignUp(data.email, data.password)
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
          className='border'
            id="name"
            type="text"
            placeholder="enter full name"
            {...register("firstName")}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
          className='border'
            type="email"
            id="email"
            placeholder="enter email address"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
          className='border'
            type="password"
            id="password"
            placeholder="enter password"
            {...register("password")}
          />
        </div>
        <div>
          <label htmlFor="re_password">Re Enter Password</label>
          <input
          className='border'
            type="password"
            id="re_password"
            placeholder="re enter password"
            {...register("rePassword")}
          />
        </div>
        <input type="submit" vlaue='sign up'/>
      </form>
    </div>
  );
};

export default SignUp;
