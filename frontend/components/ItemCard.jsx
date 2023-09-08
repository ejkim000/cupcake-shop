import placeholder from '../src/assets/cupcake.png';

function ItemCard({ item, category }) {
  const { name, picture, desc } = item;
  return (
      <div className="item-card">
        {/* <img src={picture} alt={name} /> */}
        <img src={placeholder} alt={name} />
        <h3 className='vertical-center'>{name}</h3>
        <p>{desc.slice(0,70)}...</p>
      </div>
  );
}

export default ItemCard;
