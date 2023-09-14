import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/items/design');
  };
  return (
    <div className="container">
      <section className="heading bubble-container">
        <h1 className="speech-bubble">Welcome to Cupcake Shop</h1>
      </section>
      <div className="bg-sprinkles">
        <section className="bg-cupcake">
          <div className="home-main">
            <h2>Birth Day</h2>
            <h2>Wedding</h2>
            <h2>Anniversary</h2>
            <h2>Mother&apos;s Day</h2>
            <h2>Special Events</h2>
            <h2>
              <button className="btn lg center" onClick={onClick}>
                Make Your Own Cupcakes
              </button>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
