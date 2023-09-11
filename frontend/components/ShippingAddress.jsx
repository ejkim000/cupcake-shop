import { useState } from 'react';
import StateList from './StateList';

function ShippingAddress() {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const { name, street, street2, city, state, zipcode } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="order-form">
      <h1>Shipping Address</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
          <label>Street</label>
          <input
            type="street"
            className="form-control"
            id="street"
            name="street"
            value={street}
            placeholder="Enter your street address"
            onChange={onChange}
          />
          <label>APT or Unit #</label>
          <input
            type="street2"
            className="form-control"
            id="street2"
            name="street2"
            value={street2}
            placeholder="Enter your apt # or unit #"
            onChange={onChange}
          />
          <label>City</label>
          <input
            type="city"
            className="form-control"
            id="city"
            name="city"
            value={city}
            placeholder="Enter your city"
            onChange={onChange}
          />
          <label>State</label>
          <StateList state={state} />
          <label>Zipcode</label>
          <input
            type="zipcode"
            className="form-control"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            placeholder="Enter your zipcode"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}

export default ShippingAddress;
