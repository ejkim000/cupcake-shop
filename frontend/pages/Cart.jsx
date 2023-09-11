import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [emptyCart, setEmptyCart] = useState('');
  const [hideTotal, setHideTotal] = useState('');

  useEffect(() => {
    // Get save cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart'));

    // Redirect to home page when there is no saved cart items
    if (!savedCart || savedCart.length === 0) {
      // navigate('/');
      setEmptyCart('Cart is empty');
      setHideTotal(' hide');
    }

    setCartItems(savedCart);

    // get total
    setTotal(
      savedCart.reduce(
        (acc, current) => acc + current.sub_total * current.qty,
        0
      )
    );
  }, [navigate]);

  useEffect(() => {
    // Get tax, grand total
    setTax(total * 0.075); // NJ tax for now
    setGrandTotal(total + tax * 1);
  }, [total, tax]);

  return (
    <>
      <section className="heading">
        <h1>My Cart</h1>
        <p>{emptyCart}</p>
      </section>
      <div className="cart">
        {cartItems &&
          cartItems.map((item, i) => (
            <CartItem item={item} index={i} key={i} />
          ))}
        <section className={`cart-total${hideTotal}`}>
          <div>
            Total:&nbsp;<span> ${total.toFixed(2)}</span>
          </div>
          <div>
            Tax:&nbsp;<span> ${tax.toFixed(2)}</span>
          </div>
          <div>
            Grand Total:&nbsp;<span> ${grandTotal.toFixed(2)}</span>
          </div>
          <div className="order-link">
            <Link to="/order" className="btn btn-block">
              Order Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
