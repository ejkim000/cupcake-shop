import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // There were infinit calling since this if sentance was below error part
    if (!user) {
      navigate('/login');
    }

    // return () => {
    //   dispatch(reset());
    // }
  }, [user]);

  return <div>Order</div>;
}

export default Order;
