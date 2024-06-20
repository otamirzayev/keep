import { FaTrash } from "react-icons/fa";
import { useState } from "react";

function CartIteam() {
    const [amount, setAmount] = useState(product.amount)
  return (
    <div>
      <li key={product.id}>
        <h3>{product.title}</h3>

        <button onClick={() => deleteProduct(product.id)}>
          <FaTrash />
        </button>

        <div>
          <button onClick={() => setAmount(amount + 1)}>+</button>
          <p>{product.amount}</p>
          <button onClick={() => setAmount(amount - 1)}>-</button>
        </div>
      </li>
    </div>
  );
}

export default CartIteam;
