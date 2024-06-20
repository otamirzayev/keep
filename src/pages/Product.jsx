import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FaPlus, FaMinus } from "react-icons/fa";

import { useGlobalContext } from "../hooks/useGlobalContext";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Product() {
  const {addProduct} = useContext(GlobalContext)
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );

  const [amount, setAmount] = useState(null)

  const handleAdd = () => {
    addProduct({...data, amount})
  }
  return (
    <>
    {data && <div>data.title</div>}
      <form className="flex gap-6">
        <div className="relative flex items-center max-w-[8rem]">
          <button onClick={() => setAmount(amount-1)}
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="border border-gray-500 rounded-s-lg p-3 h-11"
          >
            <FaMinus />
            <div>{amount}</div>
          </button>
          <input
            type="text"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="border border-gray-500 h-11 text-center w-full py-2.5 bg-transparent"
            placeholder="1"
            required
            autoComplete="off"
          />
          <button onClick={() => setAmount(amount-1)}
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="border border-gray-500 rounded-e-lg p-3 h-11"
          >
            <FaPlus />
          </button>
        </div>
        <button onClick={ () => {} }>Add</button>
      </form>
      <button className="btn btn-primary mt-4">BUY</button>
    </>
  );
}

export default Product;
