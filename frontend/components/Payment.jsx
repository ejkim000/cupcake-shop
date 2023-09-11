import { useState } from 'react';

function Payment() {
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
    <div>
      <h1>Payment</h1>
      <form onSubmit={onSubmit} className="form narrow">
        <div className="form-group">
          <button type="submit" className="btn btn-block">
             PayPal
          </button>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Venmo
          </button>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
