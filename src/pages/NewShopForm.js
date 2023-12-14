import React, { useState } from 'react';

const NewShopForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Shop submitted:', { name, description });
    alert('Shop submitted!');
  };

  const handleCancel = () => {
    
    console.log('Shop creation cancelled');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Shop</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default NewShopForm;
