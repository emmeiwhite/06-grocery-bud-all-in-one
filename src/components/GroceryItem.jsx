export default function GroceryItem({ id, name, isChecked, handleDelete }) {
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
