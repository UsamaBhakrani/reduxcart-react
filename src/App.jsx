import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotals } from "./slice/cartSlice";
import Modal from "./components/Modal";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
};

export default App;
