import React, { useState } from "react";
import { preconnect } from "react-dom";

const ShoppingList = () => {
  const [items, setItems] = useState([]); // items is the state variable and setItems is the function that updates the state variable

  const [name, setName] = useState(""); // name is the state variable and setName is the function that updates the state variable

  const [quantity, setQuantity] = useState(""); // quantity is the state variable and setQuantity is the function that updates the state variable

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems([...items, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
