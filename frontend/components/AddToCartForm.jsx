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
  const [selectedSize, setSelectedSize] = useState('');

  const dispatch = useDispatch();
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );
  const { sizes, isLoadingS, isErrorS, messageS } = useSelector(
    (state) => state.sizes
  );

  // get save options from localStorage
  const savedOptions = JSON.parse(
    localStorage.getItem('cupcakeshop-selected-options')
  );

  // set all the options by filtering state value array
  const designSizes = sizes.filter((size) => size.item.toString() === id);
  const cakes = items.filter((item) => item.category === 'cake');
  const frostings = items.filter((item) => item.category === 'frosting');
  const fillings = items.filter((item) => item.category === 'filling');

  const onSubmit = (e) => {
    e.preventDeafault();
  };

  const onChange = (e) => {
    if (e.target.name === 'size') {
      setSelectedSize(e.target.value);
    }

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

    const size = sizes.filter((s) => s._id === selectedSize);

    if (size && size.length > 0) setSubTotal(size[0].price);

    // save selected options in the local storage
    localStorage.setItem(
      'cupcakeshop-selected-options',
      JSON.stringify(formData)
    );
  }, [selectedSize, dispatch, isError, isErrorS, formData]);

  if (isLoading || isLoadingS) {
    return <Loading />;
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        {/* <div className="form-group">
          <label className="form-label">
            Selected Design : <strong>{name}</strong>
          </label>
        </div> */}
        <div className="form-group">
          <label className="form-label">Size</label>
          <select name="size" value={savedOptions.size} onChange={onChange} className="form-control">
            <option value="">Please select size</option>
            {designSizes.map((s) => (
              <option key={s._id} value={s._id}>
                {s.size}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Cake</label>
          <select name="cake" value={savedOptions.cake} onChange={onChange} className="form-control">
            <option value="">Please select filling</option>
            {cakes &&
              cakes
                // .filter((cake) => cake.size === selectedSize)
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Frosting</label>
          <select name="frosting" value={savedOptions.frosting} onChange={onChange} className="form-control">
            <option value="">Please select frosting</option>
            {frostings &&
              frostings
                // .filter((cake) => cake.size === selectedSize)
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Filling</label>
          <select name="filling" value={savedOptions.filling} onChange={onChange} className="form-control">
            <option value="">No Filling</option>
            {fillings &&
              fillings
                // .filter((cake) => cake.size === selectedSize)
                .map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
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
