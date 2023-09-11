import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = () => {
    navigate('/order/complete');
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
        <h1>Checkout</h1>
        <p>Please select your payment option</p>
      </section>
      <section className="form">
        <div className="form-group">
          <button onClick={onSubmit} type="submit" className="btn btn-block">
            PayPal
          </button>
        </div>
        <div className="form-group">
          <button onClick={onSubmit} type="submit" className="btn btn-block">
            Venmo
          </button>
        </div>
      </section>
    </>
  );
}

export default Checkout;
