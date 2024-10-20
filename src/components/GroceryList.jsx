import GroceryItem from './GroceryItem'

export default function GroceryList({ listItems, handleDelete }) {
  return (
    <div>
      {listItems &&
        listItems.map(item => (
          <GroceryItem
            {...item}
            key={item.id}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  )
}
