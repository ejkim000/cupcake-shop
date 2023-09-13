import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShippingAddress from '../components/ShippingAddress';
// import BillingAddress from '../components/BillingAddress';
// import OrderItems from '../components/OrderItems';

function Order() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // check login
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1>My Order</h1>
        <p></p>
      </section>
      <section className="flex-space-even">
        {/* <OrderItems /> */}
        <ShippingAddress/>
        {/* <BillingAddress /> */}
      </section>
    </>
  );
}

export default Order;
