import { useDispatch, useSelector } from "react-redux";
import { ChevronUp, ChevronDown } from "./Icons";
import { increase, decrease } from "./slice/cartSlice";
import NavBar from "./components/NavBar";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default App;
