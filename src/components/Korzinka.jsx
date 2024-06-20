import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaTrash } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import CardItem from "./CardItem";
function Korzinka() {
  const { total, products, deleteProduct } = useGlobalContext();

  //

  return (
    <div className="site-container ">
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
