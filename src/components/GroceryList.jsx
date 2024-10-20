import GroceryItem from './GroceryItem'

export default function GroceryList({ listItems, handleDelete, handleChecked }) {
  return (
    <div className="items">
      {listItems &&
        listItems.map(item => (
          <GroceryItem
            {...item}
            key={item.id}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        ))}
    </div>
  )
}
