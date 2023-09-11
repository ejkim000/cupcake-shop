import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ShippingAddress from '../components/ShippingAddress';
import BillingAddress from '../components/BillingAddress';
// import OrderItems from '../components/OrderItems';

function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onCheckOut = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    // There were infinit calling since this if sentance was below error part
    if (!user) {
      navigate('/login');
    }

    // return () => {
    //   dispatch(reset());
    // }
  }, [user]);

  return (
    <>
      <section className="heading">
        <h1>My Order</h1>
        <p>Please fill out information</p>
      </section>
      <section className="order">
        {/* <OrderItems /> */}
        <ShippingAddress />
        <BillingAddress />
      </section>
      <section className="form">
        <div className="form-group">
          <button onClick={onCheckOut} type="submit" className="btn btn-block">
            Checkout
          </button>
        </div>
      </section>
    </>
  );
}

export default Order;
