import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';

function Item() {
  const navigate = useNavigate();
  const { id } = useParams();
  // Receive state from ItemCard component
  const { state } = useLocation();

  if (!id || !state) {
    navigate('/');
  }
  const item = state;
  const flexDir = item.category === 'design' ? '' : ' flex-row';

  return (
    <div className="container">
      <section className="heading">
        <h1>{item.name}</h1>
      </section>
      <section className="item-detail">
        <div className={`detail-desc${flexDir}`}>
          <img src="../src/assets/cupcake.png" alt="cupcake" />
          <div>
            <p>{item.desc}</p>
            {item.category !== 'design' && (
              <p className="form-group">
                <Link to="/items/design" className="btn form">
                  Go To Select Design
                </Link>
              </p>
            )}
          </div>
        </div>
        {item.category === 'design' && (
          <div className="detail-options">
            <AddToCartForm name={item.name} id={id} />
          </div>
        )}
      </section>
    </div>
  );
}

export default Item;
