import { useNavigate } from 'react-router-dom';

function MyAccount() {

  const navigate = useNavigate();

  const updateAccount = () => {
    navigate('/myaccount/update');
  };

  return (
    <>
      <section className="heading">
        <h1>My Account</h1>
      </section>
      <section className="grid-space-even">
        <div className="myaccount">
          <h3>My Account Infomation</h3>
          <div className="box">
          <p>Name: <span>Honey Dew</span></p>
          <p>Email: <span>honeydew@email.com</span></p>
          <button onClick={updateAccount} className="btn small">Update Information</button>
          </div>
        </div>
        <div className="myaccount">
          <h3>My Order Infomation</h3>
          <div className="box">
            <p>Order No: <span>123456</span></p>
            <p>Date: <span>09/14/2023</span></p>
            <p>Items: <span>Flower Bouquet</span></p>
            <p>Payemnt: <span>$100</span></p>
            <p>Status: <span>Payment Received</span></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAccount;
