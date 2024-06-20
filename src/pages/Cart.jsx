import { useGlobalContext } from "../hooks/useGlobalContext";
import CartIteam from "../components/CartIteam"

function Cart() {
  const { total, products } = useGlobalContext;
  return (
    <div className="site-container">
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return <CartIteam/>
          
            
          })}
      </ul>
    </div>
  );
}

export default Cart;
