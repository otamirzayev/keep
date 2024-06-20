import { createContext, useEffect, useReducer } from "react";
import { produce } from "immer";

export const GlobalContext = createContext();

function stateFromLocalStorage() {
  return (
    JSON.parsec(localStorage.getItem("mystore")) || {
      user: null,
      product: [],
      total: 0,
      isAuthChange: false,
    }
  );
}

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "AUTH_CHANGE": {
      return { ...state, isAuthChange: true };
    }
    case "ADD_PRODUCT":
      return { ...state, products: payload };
    case "CHNGE_TOTAL":
      return { ...state, total: payload };

    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, stateFromLocalStorage);

  // add selected product
  const addProduct = (prod) => {
    if (state.products.find((product) => product.id == prod.id)) {
      function toggleTodo(state, prod) {
        return produce(state, (draft) => {
          const todo = draft.products.find((product) => product.id === prod.id);
          product.amount = product.amount + prod.amount;
        });
      }

      const result = toggleIteam(state, prod);
      dispatch({ type: "ADD_PRODUCT", payload: result });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: [...state.products, prod] });
    }

    dispatch({ type: "ADD_PRODUCT", payload: newProducts });
    if (!state.products.find((product) => product.id !== prod.id))
      dispatch({ type: "ADD_PRODUCT", payload: [...state.products, prod] });
  };
  // delete
  const deleteProduct = (id) => {
    const deleteProducts = state.products.filter(
      (product) => product.id !== id
    );
    dispatch({ type: "ADD_PRODUCT", payload:deleteProducts});
  };

  // callculate
  function calculateTotal() {
    let counter = 0;
    state.products.forEach((iteam) => {
      counter += iteam.amount;
    });

    dispatch({ type: "CHANGE_TOTAL", payload: counter });
  }

  useEffect(() => {
    calculateTotal();
  }, [state.products]);

  useEffect(() => {
    loacalStorage.setIteam("mystore", JSON.stringify(state));
  }, [state]);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch, addProduct, deleteProduct }}>
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalContextProvider;
