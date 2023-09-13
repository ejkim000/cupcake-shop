import { useNavigate } from 'react-router-dom';
import placeholder from '../src/assets/cupcake.png';

function ItemCard({ item }) {
  const navigate = useNavigate();
  const { _id, name, picture } = item;
  
  const onClick = () => {
    // Send item as state => will be used in the Item page 
    navigate(`/item/${_id}`, {state: item});
  };
  
  return (
    <div className="item-card">
      {/* <img src={picture} alt={name} /> */}
      <img src={placeholder} alt={name} />
      <h3 className="vertical-center">{name}</h3>
      <button className="btn form" onClick={onClick}>
        Show Details
      </button>
    </div>
  );
}

export default ItemCard;
