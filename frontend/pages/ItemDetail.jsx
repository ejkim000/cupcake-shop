import { useParams, useNavigate } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';

function ItemDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    navigate('/');
  }
    const arr = id.split('_');
    const name = arr[0];
    const item_id = arr[1];


  return (
    <>
      <section className="heading">
        <h1>{name}</h1>
      </section>
      <section className="item-detail">
        <div className="detail-image">
          <img src="../src/assets/cupcake.png" alt="cupcake" />
          <p>
            Fondant icing is a sugar paste and a classic choice for decorating
            cakes because it provides a smooth and professional look. There are
            three types of fondant: rolled fondant, marshmallow fondant, and
            poured fondant. They are all used for coating sponges and pastries
            but will provide slightly different results. We will be focusing on
            rolled fondant below.
          </p>
        </div>
        <div className="detail-options">
          <AddToCartForm name={name} id={item_id} />
        </div>
      </section>
    </>
  );
}

export default ItemDetail;
