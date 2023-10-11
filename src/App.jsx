import { useDispatch, useSelector } from "react-redux";
import { ChevronUp, ChevronDown } from "./Icons";
import { increaseAmount, decreaseAmount } from "./slice/cartSlice";
import NavBar from "./components/NavBar";
import Cart from "./components/CartContainer";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
      <Cart />
    </div>
  );
};

export default App;
