import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AddToCartForm() {
  const { id } = useParams();

  
  const [formData, setFormData] = useState({
    design: id,
    size: '',
    cake: '',
    frosting: '',
    filling: '',
  });
  const [subTotal, setSubTotal] = useState(0);

  const onSubmit = (e) => {
    e.preventDeafault();
  };

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(formData, subTotal);
  }, [formData, subTotal]);

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label">
            Selected Design : <strong>{id}</strong>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">Select Size</label>
          <select name="size" onChange={onChange} className="form-control">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Select Cake</label>
          <select name="cake" onChange={onChange} className="form-control">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Select Frosting</label>
          <select name="frosting" onChange={onChange} className="form-control">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Select Filling</label>
          <select name="filling" onChange={onChange} className="form-control">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <div className="sub-total">Sub Total: ${subTotal}</div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add to Cart
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddToCartForm;
