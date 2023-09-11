import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import Items from '../pages/Items';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Item from '../pages/Item';
import Checkout from '../pages/Checkout';
import OrderComplete from '../pages/OrderComplete';
import UpdateAccount from '../pages/UpdateAccount';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/myaccount/update" element={<UpdateAccount />} />
            <Route path="/items/:category" element={<Items />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order/complete" element={<OrderComplete />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
