import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2>add new Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="border"
            id="name"
            type="text"
            placeholder="enter full name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Supplier</label>
          <input
            className="border"
            id="supplier"
            type="text"
            placeholder="Supplier"
            {...register("supplier")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Description</label>
          <input
            className="border"
            id="Description"
            type="text"
            placeholder="Description"
            {...register("Description")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Full Name</label>
          <input
            className="border"
            id="name"
            type="text"
            placeholder="enter full name"
            {...register("firstName")}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItems;
