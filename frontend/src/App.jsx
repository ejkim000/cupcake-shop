import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Signup from '../pages/Signup';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
