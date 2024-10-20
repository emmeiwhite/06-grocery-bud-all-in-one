import { useState } from 'react'

export default function GroceryItem({ id, name, completed, handleDelete, handleChecked }) {
  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={completed}
          name=""
          id=""
          onChange={e => handleChecked(id)}
        />
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
