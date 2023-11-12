import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setState }) => {
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = (data) => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(data);
    localStorage.setItem("items", JSON.stringify(items));
    reset();
    setState(items);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-md mx-auto mt-3">
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl mx-auto">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter product ID"
            className="input input-bordered w-full max-w-xs mt-2"
            {...register("productId")}
          />
          <input
            placeholder="Enter product price"
            type="number"
            className="input input-bordered w-full max-w-xs mt-2"
            {...register("sellingPrice")}
          />
          <input
            type="text"
            placeholder="Enter product name"
            className="input input-bordered w-full max-w-xs mt-2"
            {...register("productName")}
          />
          <button type="submit" className="btn btn-success mx-auto block mt-2">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
