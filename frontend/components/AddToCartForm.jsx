import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSizes } from '../features/size/sizeSlice';
import { getItems } from '../features/item/itemSlice';
import Loading from '../components/Loading';

function AddToCartForm({ name, id }) {
  const [formData, setFormData] = useState({
    design: id,
    size: '',
    cake: '',
    frosting: '',
    filling: '',
  });
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );
  const { sizes, isLoadingS, isErrorS, messageS } = useSelector(
    (state) => state.sizes
  );

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
    if (isError) {
      console.log(message);
    }
    if (isErrorS) {
      console.log(messageS);
    }

    dispatch(getItems());
    dispatch(getSizes());
    console.log(items);
    console.log(sizes);

    console.log(formData, subTotal);
  }, [formData, subTotal, dispatch, isError, isErrorS]);

  if (isLoading || isLoadingS) {
    return <Loading />;
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label">
            Selected Design : <strong>{name}</strong>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">Select Size</label>
          <select name="size" onChange={onChange} className="form-control">
            {sizes &&
              sizes
                .filter((size) => size.item.toString() === id)
                .map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.size}
                  </option>
                ))}
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
