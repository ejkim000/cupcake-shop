import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getItems, reset } from '../features/item/itemSlice';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';

function Items() {
  const dispatch = useDispatch();
  const params = useParams();
  const category = !params.category ? 'design': params.category;
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getItems());
  }, [isError, dispatch, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="heading">
        <h1>{category}</h1>
      </section>
      <section className="container-center">
        <div className="item-card-container">
          {items &&
            items
              .filter((item) => item.category === category)
              .map((i) => {
                return <ItemCard key={i._id} item={i} />;
              })}
        </div>
      </section>
    </>
  );
}

export default Items;
