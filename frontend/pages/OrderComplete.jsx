import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function OrderComplete() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // check login
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <section className="heading">
        <h1>Order Completed!</h1>
        <p></p>
      </section>
      <section className="main-container">
        <div className="box">
          <h3>Your order was completed!</h3>
          <h3>Thank you for your purchase.</h3>

        </div>
      </section>
    </div>
  );
}

export default OrderComplete;
