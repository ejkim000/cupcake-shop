import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { update, remove, reset, logout } from '../features/auth/authSlice';
import Loading from '../components/Loading';

function UpdateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // use useSlector hook to get stored reducer in store.js
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [hide, setHide] = useState(' hide');
  const [userEmail, setUserEmail] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: userEmail,
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Update user
  const onUpdate = (e) => {
    e.preventDefault();

    if (!name || !password || !password2) {
      toast.error('Please input all information');
    } else {
      if (password !== password2) {
        toast.error('Passwords do not match');
      } else {
        const userData = {
          name,
          email: userEmail,
          password,
        };

        dispatch(update(userData));

        navigate('/myaccount');
      }
    }
  };

  // Delete user
  const onDelete = () => {
    if (!name || !password || !password2) {
      toast.error('Please input all information');
    } else {
      if (password !== password2) {
        toast.error('Passwords do not match');
      } else {
        const userData = {
          name,
          email: userEmail,
          password,
        };

        dispatch(remove(userData));

        // dispatch(logout());
        // dispatch(reset());
        // navigate('/');
      }
    }
  };

  const showDeleteMsg = () => {
    setHide('');
  };

  // there are many ways to handle auth, this is one of them
  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setUserEmail(user.email);
    }

    if (isError) {
      toast.error(message);
    }

    // dispatch can call actions from reducer
    return () => {
      dispatch(reset());
    };
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Show spinner while loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="heading">
        <h1>Update Account</h1>
        <p>Please fill out the form</p>
      </section>
      <section className="form">
        <form onSubmit={onUpdate}>
          <div className="form-group">
            <label>* Cannot update email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userEmail}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Update
            </button>
          </div>
        </form>
        <div>
          <button onClick={showDeleteMsg} className="btn reverse btn-block">
            Delete Account
          </button>
          <div className={`delete-msg${hide}`}>
            <p>
              Are you sure to delete your account? <br />
              Your all order information will be deleted as well.
            </p>
            <button onClick={onDelete} className="btn red btn-block">
              Confirm and Delete
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateAccount;
