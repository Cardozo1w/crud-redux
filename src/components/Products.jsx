import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions Redux
import { createNewProductAction } from "../actions/products";

export const Products = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const createProduct = (product) => {
    //use dispatch and create a function
    dispatch(createNewProductAction(product));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProduct(product);
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <label className="flex flex-col w-full">
          Product Name
          <input
            className="py-3 px-8 border mb-3 border-indigo-300 rounded-md"
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={onChange}
          />
        </label>
        <label className="flex flex-col w-full">
          Price
          <input
            className="py-3 px-8 border mb-3 border-indigo-300 rounded-md"
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={onChange}
          />
        </label>
        <button
          className="w-full py-3 bg-indigo-500 rounded-md shadow text-white font-medium text-lg hover:bg-indigo-800 delay-200 transition-all mb-3"
          type="submit"
        >
          Add Product
        </button>
      </form>
      {loading ? (
        <div className="w-full py-3 text-center bg-indigo-500 text-white font-medium">
          Loading...
        </div>
      ) : null}
      {error ? (
        <div className="w-full py-3 text-center bg-red-500 text-white font-medium">
          There was an error
        </div>
      ) : null}
    </section>
  );
};
