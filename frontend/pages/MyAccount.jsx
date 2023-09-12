import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { reset } from '../features/auth/authSlice';
import Loading from '../components/Loading';

function MyAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // use useSlector hook to get stored reducer in store.js
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const updateAccount = () => {
    navigate('/myaccount/update');
  };
  
  // there are many ways to handle auth, this is one of them
  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      setUserEmail(user.email);
      setUserName(user.name);
    }

    if (isError) {
      toast.error(message);
    }

    // dispatch can call actions from reducer
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Show spinner while loading
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="heading">
        <h1>My Account</h1>
      </section>
      <section className="grid-space-even">
        <div className="myaccount">
          <h3>My Account Infomation</h3>
          <div className="box">
            <p>
              Name: <span>{userName}</span>
            </p>
            <p>
              Email: <span>{userEmail}</span>
            </p>
            <button onClick={updateAccount} className="btn small">
              Update Information
            </button>
          </div>
        </div>
        <div className="myaccount">
          <h3>My Order Infomation</h3>
          <div className="box">
            <p>
              Order No: <span>123456</span>
            </p>
            <p>
              Date: <span>09/14/2023</span>
            </p>
            <p>
              Items: <span>Flower Bouquet</span>
            </p>
            <p>
              Payemnt: <span>$100</span>
            </p>
            <p>
              Status: <span>Payment Received</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAccount;
