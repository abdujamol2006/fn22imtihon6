import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
function CardItem({ product }) {
  const [amount, setAmount] = useState(0);
  const { deleteProduct, increaseAmount, decreaseAmount } = useGlobalContext();
  useEffect(() => {}, [amount]);
  return (
    <div className="">
      <h1>Ordering page</h1>
      <Link to="/">
        <button className="btn btn-secondary">Back to Home</button>
      </Link>
      <li className="grid grid-cols-5 items-center ">
        <img
          src={product.thumbnail}
          alt={product.thumbnail}
          className="w-20 h-20"
        />

        <h2>{product.title}</h2>

        <div className="flex items-center gap-4">
          <button onClick={() => deleteProduct(product.id)}>
            <FaTrash />
          </button>
          <div className="flex items-center gap-4">
            <button onClick={() => increaseAmount(product.id)} className="btn">
              +
            </button>
            <div>{product.amount}</div>
            <button onClick={() => decreaseAmount(product.id)} className="btn">
              -
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CardItem;
