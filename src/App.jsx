import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotals } from "./slice/cartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div>
      <NavBar />
      <CartContainer />
    </div>
  );
};

export default App;
