function Payment() {

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
