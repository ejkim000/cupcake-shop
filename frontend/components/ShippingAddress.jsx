import StateList from './StateList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ShippingAddress() {
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    name: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zipcode: '',
  });
  
  const { name, street, street2, city, state, zipcode } = formData;

  const onCheckOut = () => {
    if (!name || !street || !city || !state || !zipcode) {
      toast.error('Please input all required fields')
    } else {
      // Save in localStorage
      localStorage.setItem('shipping-address', JSON.stringify(formData));

      navigate('/checkout');
    }

  };

  const updateValue = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="order-form">
      <h1>Shipping Address</h1>
      <form onSubmit={onCheckOut} className="form">
        <div className="form-group">
          <label>Name*</label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={updateValue}
            required
          />
          <label>Street*</label>
          <input
            type="street"
            className="form-control"
            id="street"
            name="street"
            value={street}
            placeholder="Enter your street address"
            onChange={updateValue}
            required
          />
          <label>APT or Unit #</label>
          <input
            type="street2"
            className="form-control"
            id="street2"
            name="street2"
            value={street2}
            placeholder="Enter your apt # or unit #"
            onChange={updateValue}
            required
          />
          <label>City*</label>
          <input
            type="city"
            className="form-control"
            id="city"
            name="city"
            value={city}
            placeholder="Enter your city"
            onChange={updateValue}
            required
          />
          <label>State*</label>
          <StateList state={state} updateValue={updateValue} />
          <label>Zipcode*</label>
          <input
            type="zipcode"
            className="form-control"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            placeholder="Enter your zipcode"
            onChange={updateValue}
            required
          />
        </div>
        <div className="form-group">
          <button onClick={onCheckOut} type="submit" className="btn btn-block">
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShippingAddress;
