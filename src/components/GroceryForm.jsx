import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function GroceryForm({ getItem }) {
  const [item, setItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (item) {
      const itemObj = {
        id: nanoid(),
        name: item,
        isChecked: false
      }
      getItem(itemObj)

      setItem('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          onChange={e => setItem(e.target.value)}
          value={item}
          className="form-input"
        />
        <button className="btn">Add Item</button>
      </div>
    </form>
  )
}
