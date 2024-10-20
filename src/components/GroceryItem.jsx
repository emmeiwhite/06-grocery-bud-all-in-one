export default function GroceryItem({ id, name, isChecked, handleDelete }) {
  console.log(name, id, isChecked)
  return (
    <div>
      <p>
        <span>{name}</span>{' '}
        <button
          className="btn delete"
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
      </p>
    </div>
  )
}
