import React, {useState} from "react";
import './index.css'

function List() {
    const [items,setItems] = useState([]);
    const [newItems, setnewItems] = useState("");

    function handleItemsChange(event) {
        setnewItems(event.target.value);
    }

    function addItem() {
        if(newItems.trim() !== "") {
            setItems(i =>[...i, newItems]);
            setnewItems("");
        }
    }

    function deleteItem(index) {
        const updateItems = (items.filter((_, i) => i !== index)); //filtering out the item at the given index
        setItems(updateItems);
    }

    function moveUp(index) {
        if(index > 0) {
            const updateItems = [...items];
            [updateItems[index], updateItems[index - 1]] = [updateItems[index - 1], updateItems[index]];
            setItems(updateItems);
        }
    }

    function moveDown(index) {
        if(index < items.length - 1) {
            const updateItems = [...items];
            [updateItems[index], updateItems[index + 1]] = [updateItems[index + 1], updateItems[index]];
            setItems(updateItems);
        }
    }
    return(
        <div className="container">
            <h1>To Do List</h1>
            <div className="input-container">
                <input className= "input-box" type="text" placeholder="Add a new task" onChange={handleItemsChange} value={newItems}/>
                <button className="add-button" onClick={addItem}>Add</button>
            </div>

            <ol>
                {items.map((item, index) => 
                    <li key={index}>
                    <span className="display-items">{item}</span>

                    <button className="delete-buttons" onClick={() => deleteItem(index)}>Delete</button>
                    <button className="up-buttons" onClick={() => moveUp(index)}>⬆️</button>
                    <button className="down-buttons" onClick={() => moveDown(index)}>⬇️</button>

                    </li>
                )}
            </ol>

        </div>
    )
}
export default List;