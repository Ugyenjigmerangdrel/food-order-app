export default function MealItem({
  iIndex,
  itemName,
  itemPrice,
  itemDescription,
  itemImage,
  onAdd,
}) {
  return (
    <div className="meal-item">
      <article>
        <img src={itemImage} alt={itemName} />
        <h3>{itemName}</h3>
        <span className="meal-item-price ">${itemPrice}</span>
        <p className="meal-item-description">{itemDescription}</p>
        <button
          onClick={() => onAdd(iIndex)}
          className="button meal-item-actions"
        >
          Add to Cart
        </button>
      </article>
    </div>
  );
}
