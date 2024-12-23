import React, { useState } from 'react';

function InventoryManagement() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: name === 'quantity' ? parseInt(value) || 0 : value });
  };

  const addItem = () => {
    if (newItem.name.trim() === '' || newItem.quantity <= 0) {
      alert('Please enter a valid item name and quantity.');
      return;
    }
    setItems([...items, newItem]);
    setNewItem({ name: '', quantity: 0 });
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Inventory Management</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addItem} style={{ padding: '5px 10px' }}>Add Item</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>Item Name</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Quantity</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{item.name}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 0)}
                  style={{ width: '60px', padding: '5px' }}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '10px' }}>
                <button onClick={() => removeItem(index)} style={{ padding: '5px 10px' }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryManagement;
