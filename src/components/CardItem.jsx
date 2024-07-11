import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";
import toast from "react-hot-toast";
function CardItem({ product }) {
  const [amount, setAmount] = useState(0);
  const [counterPrice, setCounterPrice] = useState(product.price);
  const { deleteProduct, increaseAmount, decreaseAmount } = useGlobalContext();
  useEffect(() => {}, [amount]);
  useEffect(() => {}, [counterPrice]);
  return (
    <div className="">
      <li className=" bookcard grid grid-cols-5 items-center bg-base-400 shadow-xl mb-10">
        <img
          src={product.thumbnail}
          alt={product.thumbnail}
          className="w-20 h-20"
        />

        <h2>{product.title}</h2>

        <div className="flex items-center gap-4">
          <button onClick={() => deleteProduct(product.id)}>
            <FaTrash className="trash" />
          </button>
          <div className="flex items-center gap-4">
            <button
              disabled={
                product.amount == product.stock &&
                true &&
                toast.error("Out of stock")
              }
              onClick={() => increaseAmount(product.id, product.price)}
              className="btn"
            >
              +
            </button>
            <div>{product.amount}</div>
            <button
              disabled={product.amount == 0 && true}
              onClick={() => decreaseAmount(product.id, product.price)}
              className="btn"
            >
              -
            </button>
          </div>
        </div>
        <p>{product.price}</p>
      </li>
    </div>
  );
}

export default CardItem;
