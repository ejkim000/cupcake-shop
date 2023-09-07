import { useSelector } from 'react-redux';

function Home() {
  const {user} = useSelector(state => state.auth);
  console.log(user);
  return (
    <>
      <section className="heading">
        <h1>Welcome to Cupcake Shop</h1>
      </section>
      <section className="bg-cupcake">
        <div className="home-main">
          <h2>Birth Day</h2>
          <h2>Wedding</h2>
          <h2>Anniversary</h2>
          <h2>Mother&apos;s Day</h2>
          <h2>Special Event</h2>
          <h2><button className="btn lg center">Make Your Own Cupcake</button></h2>
        </div>
      </section>
    </>
  );
}

export default Home;
