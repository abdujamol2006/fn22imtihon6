import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaTrash } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
function Korzinka() {
  const { total, products, deleteProduct } = useGlobalContext();

  //

  return (
    <div className="site-container ">
      <h1>Booking page</h1>
      <Link to="/">
        <button className="btn btn-secondary mb-10 mt-10">Back to Home</button>
      </Link>
      <ul className="">
        {products.length > 0 &&
          products.map((product) => {
            return <CardItem key={product.id} product={product} />;
          })}
      </ul>
    </div>
  );
}

export default Korzinka;
