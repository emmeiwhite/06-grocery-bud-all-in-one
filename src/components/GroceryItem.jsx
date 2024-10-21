import { useState } from 'react'

export default function GroceryItem({ id, name, completed, handleDelete, handleChecked }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={e => handleChecked(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>{' '}
      <button
        className="btn remove-btn"
        onClick={() => handleDelete(id)}
      >
        delete
      </button>
    </div>
  )
}
