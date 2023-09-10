function CartTotal() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="cart-total">
      <div>Total: $0</div>
      <div>Tax: $0</div>
      <div>Grand Total: $0</div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Order
          </button>
        </div>
      </form>
    </section>
  );
}

export default CartTotal;
