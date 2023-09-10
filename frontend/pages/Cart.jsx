import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';

function Cart() {
  return (
    <>
      <section className="heading">
        <h1>My Cart</h1>
      </section>
      <div className="cart">
        <CartItem />
        <CartTotal />
      </div>
    </>
  );
}

export default Cart;
