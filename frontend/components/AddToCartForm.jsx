import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSizes } from '../features/size/sizeSlice';
import { getItems } from '../features/item/itemSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

function AddToCartForm({ id, name }) {
  AddToCartForm.propTypes = {
    id: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
  };

  const [formData, setFormData] = useState({
    design: id + '_' + name,
    size: '',
    cake: '',
    frosting: '',
    filling: '',
    qty: 1
  });
  const [subTotal, setSubTotal] = useState(0);
  // Get save cart from localStorage
  const savedCart = JSON.parse(localStorage.getItem('cart'));

  const [cart, setCart] = useState(
    savedCart && savedCart.length > 0 ? savedCart : []
  );

  const dispatch = useDispatch();
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );
  const { sizes, isLoadingS, isErrorS, messageS } = useSelector(
    (state) => state.sizes
  );

  // set all the options by filtering state value array
  const designSizes = sizes.filter((size) => size.item.toString() === id);
  const cakes = items.filter((item) => item.category === 'cake');
  const frostings = items.filter((item) => item.category === 'frosting');
  const fillings = items.filter((item) => item.category === 'filling');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // Get saved options from localStorage
    const savedOptions = JSON.parse(localStorage.getItem('selected-options'));

    if (
      !savedOptions.cake ||
      !savedOptions.design ||
      !savedOptions.frosting ||
      !savedOptions.size
    ) {
      toast.error('Please select all options');
    } else {
      setCart((prev) => [...prev, savedOptions]);
    }
  };

  const onChange = (e) => {
    // Add sub_total as well when select a size
    if (e.target.name === 'size') {
      const selectedSizeId = e.target.value.split('_')[0];
      const size = sizes.filter((s) => s._id === selectedSizeId);

      if (size && size.length > 0) {
        setSubTotal(size[0].price);
        // add sub_total to form data
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
          sub_total: size[0].price,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  useEffect(() => {
    // save selected options in the local storage
    localStorage.setItem('selected-options', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isErrorS) {
      console.log(messageS);
    }

    dispatch(getItems());
    dispatch(getSizes());
  }, [dispatch, isError, isErrorS, message, messageS]);

  useEffect(() => {
    // Save item to localStorage cart
    localStorage.setItem('cart', JSON.stringify(cart));

    // navigate to '/cart'
    cart.length > savedCart.length && navigate('/cart');
  }, [cart, savedCart, navigate]);

  // const qtyOptions = (num) => {
  //   let content = [];
  //   for (let i = 1; i <= num; i++) {
  //     content.push(<option value={i}>{i}</option>);
  //   }
  //   return content;
  // };

  const qtyOptions = num => {
    let content = [];
    for (let i = 1; i <= num; i++) {
      content.push(<option key={i} value={i}>{i}</option>);
    }
    return content;
  };

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
          <select
            name="size"
            value={formData.size}
            onChange={onChange}
            className="form-control">
            <option value="">Please select size</option>
            {designSizes.map((s) => (
              <option key={s._id} value={`${s._id}_${s.size}`}>
                {s.size}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Cake</label>
          <select
            name="cake"
            value={formData.cake}
            onChange={onChange}
            className="form-control">
            <option value="">Please select cake</option>
            {cakes &&
              cakes
                // .filter((cake) => cake.size === selectedSize)
                .map((item) => (
                  <option key={item._id} value={`${item._id}_${item.name}`}>
                    {item.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Frosting</label>
          <select
            name="frosting"
            value={formData.frosting}
            onChange={onChange}
            className="form-control">
            <option value="">Please select frosting</option>
            {frostings &&
              frostings
                // .filter((cake) => cake.size === selectedSize)
                .map((item) => (
                  <option key={item._id} value={`${item._id}_${item.name}`}>
                    {item.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Filling</label>
          <select
            name="filling"
            value={formData.filling}
            onChange={onChange}
            className="form-control">
            <option value="">No Filling</option>
            {fillings &&
              fillings
                // .filter((cake) => cake.size === selectedSize)
                .map((item) => (
                  <option key={item._id} value={`${item._id}_${item.name}`}>
                    {item.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Select Quantity</label>
          <select
            name="qty"
            value={formData.qty}
            onChange={onChange}
            className="form-control">
            {qtyOptions(10)}
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
