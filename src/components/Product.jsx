import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import toast from "react-hot-toast";

function Product() {
  const { addProduct } = useContext(GlobalContext);
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    "https://dummyjson.com/product/" + id
  );
  const [amount, setAmount] = useState(0);
  //
  const handleAdd = () => {
    addProduct({ ...data, amount });
  };

  return (
    <>
      {data && (
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl m-10">
            <figure>
              <img src={data.thumbnail} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>Description: {data.description}</p>
              <p>Category: {data.category}</p>
              <p>Price: {data.price}$</p>
              <p>Discount Percentage: {data.discountPercentage}</p>
              <p>Rating: {data.rating}</p>
              <p>Stock: {data.stock}</p>
              <p>Tags: {data.tags}</p>
              <p>Brand: {data.brand}</p>
              <div className="flex items-center gap-4 mb-10">
                <button
                  disabled={
                    amount == data.stock && true && toast.error("Out of stock")
                  }
                  onClick={() => setAmount(amount + 1)}
                  className="btn btn-secondary"
                >
                  +
                </button>
                <div>{amount}</div>
                <button
                  disabled={amount == 0 && true}
                  onClick={() => setAmount(amount - 1)}
                  className="btn btn-secondary"
                >
                  -
                </button>
                <button onClick={handleAdd}>Add</button>
              </div>
              <Link to="/korzinka">
                <button className="btn">Move to bucket</button>
              </Link>
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
