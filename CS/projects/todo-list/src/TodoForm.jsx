import { useState } from "react";
import './App.css';


export function TodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return
        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item' ></label>
                <input
                    placeholder="New Item"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type='text'
                    id='item' />
                <button className='btn'>Add</button>
            </div>
        </form>
    )
}