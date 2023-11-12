import React, { useEffect, useState } from "react";

const Table = ({ items, setState }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItem = (index) => {
    const newItems = items.slice(); // Create a shallow copy of the array
    newItems.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(newItems));
    setState(newItems);
  };

  useEffect(() => {
    const prices = items.map((item) => Number(item.sellingPrice));
    const totalPrice = prices.reduce(
      (accumulator, value) => accumulator + value,
      0
    );
    setTotalPrice(totalPrice);
  }, [items]);

  if (items.length > 0) {
    return (
      <div className="mx-auto my-4 w-[95%] md:w-[60%] lg:w-[50%]">
        <table className="table table-md p-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Product ID</th>
              <th>Selling Price</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            {items.map((items, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{items.productId}</td>
                <td>{items.sellingPrice}</td>
                <td>{items.productName}</td>
                <td>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => deleteItem(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="alert alert-info max-w-xs mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Price of items: {totalPrice}</span>
        </div>
      </div>
    );
  }
};

export default Table;
