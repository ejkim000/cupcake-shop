import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartItem({ item, index }) {
  CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.node.isRequired,
  };

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart'))
  );
  const navigate = useNavigate();

  const onRemove = () => {
    setCartItems((prev) => prev.filter((itm, idx) => idx !== index));
    navigate(0); // refersh page
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="cart-item">
      <div className="item-image">
        <img src="../src/assets/cupcake.png" alt="cupcake" />
      </div>
      <div className="item-info">
        <ul>
          <li>
            Design: <span>{item.design.split('_')[1]}</span>
          </li>
          <li>
            Cake: <span>{item.cake.split('_')[1]}</span>
          </li>
          <li>
            Frosting: <span>{item.frosting.split('_')[1]}</span>
          </li>
          <li>
            Filling: <span>{item.filling.split('_')[1]}</span>
          </li>
          <li>
            Size: <span>{item.size.split('_')[1]}</span>
          </li>
        </ul>
      </div>
      <div className="item-info">
        <p>Qty: {item.qty}</p>
        <p>Price: ${item.sub_total * item.qty}</p>
        <p>
          <button onClick={onRemove} className="btn reverse small">
            Remove
          </button>
        </p>
      </div>
    </section>
  );
}

export default CartItem;
