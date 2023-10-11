import { useDispatch, useSelector } from "react-redux";
import { ChevronUp, ChevronDown } from "./Icons";
import { increase, decrease } from "./slice/cartSlice";
import CartItems from "./CartItems";

const App = () => {
  const cart = useSelector((state) => state.cart )
  const dispatch = useDispatch();

  return (
    <div>
      {CartItems.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <div
              onClick={() => dispatch(increase(item.id))}
              className="amount-btn"
            >
              <ChevronUp />
            </div>
            <div>{item.amount}</div>
            <div className="amount-btn">
              <ChevronDown />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
