import Item from "../item";
function FoodItem({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((items) => (
          <Item key={items} foodItem={items}></Item>
        ))}
      </ul>
    </>
  );
}

export default FoodItem;
