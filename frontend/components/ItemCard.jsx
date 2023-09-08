import { useNavigate } from 'react-router-dom';
import placeholder from '../src/assets/cupcake.png';

function ItemCard({ item }) {
  const navigate = useNavigate();
  const { _id, name, picture, desc } = item;
  const onClick = () => {
    navigate(`/item-detail/${_id}`);
  };
  return (
    <div className="item-card">
      {/* <img src={picture} alt={name} /> */}
      <img src={placeholder} alt={name} />
      <h3 className="vertical-center">{name}</h3>
      <p>{desc.slice(0, 70)}...</p>
      <button className="btn form" onClick={onClick}>
        See Detail
      </button>
    </div>
  );
}

export default ItemCard;
