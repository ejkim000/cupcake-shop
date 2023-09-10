function CartItem() {
  return (
    <section className="cart-item">
      <div className="item-image">
        <img src="../src/assets/cupcake.png" alt="cupcake" />
      </div>
      <div className="item-info">
        <ul>
            <li>Fondant icing</li>
            <li>Fondant icing</li>
            <li>Fondant icing</li>
            <li>Fondant icing</li>
            <li>Fondant icing</li>
        </ul>
      </div>
      <div className="qty">
        Qty: 1
      </div>
    </section>
  );
}

export default CartItem;
