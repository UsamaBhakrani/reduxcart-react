import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section>
      <header>
        <h2>Your Bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
