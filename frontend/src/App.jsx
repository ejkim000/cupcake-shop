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
import ItemDetail from '../pages/ItemDetail';

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
            <Route path="/items" element={<Items />} />
            <Route path="/item-detail/:id" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
