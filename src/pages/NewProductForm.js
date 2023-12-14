import React, { useState } from 'react';

const NewProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Perform real-time validation as the user types
    const updatedErrors = { ...errors };

    if (name === 'quantity') {
      if (isNaN(value) || !Number.isInteger(Number(value)) || value < 0) {
        updatedErrors[name] = '*Quantity must be an integer.';
      } else {
        delete updatedErrors[name];
      }
    } else if (name === 'price') {
      if (isNaN(value) || value < 0) {
        updatedErrors[name] = '*Price must be a number.';
      } else {
        delete updatedErrors[name];
      }
    }

    setProduct({ ...product, [name]: value });
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log('New Product Values:', product);
    } else {
      console.log('Please check all the validation');
      setErrors(validationErrors); // Update the error messages
    }
  };

  const handleCancel = () => {
    console.log('Cancel event called');
    setProduct({ name: '', description: '', category: '', quantity: '', price: '' });
  };

  const validateForm = () => {
    const { name, description, category, quantity, price } = product;
    const errors = {};

    if (!name) {
      errors.name = 'Name must be a non-null value.';
    }
    if (!description) {
      errors.description = 'Description must be a non-null value.';
    }
    if (!category) {
      errors.category = 'Category must be a non-null value.';
    }
    if (!quantity) {
      errors.quantity = 'Quantity must be a non-null value.';
    }
    if (!price) {
      errors.price = 'Price must be a non-null value.';
    }
    if (isNaN(quantity) || !Number.isInteger(Number(quantity)) || quantity < 0) {
      errors.quantity = '*Quantity must be an integer.';
    }
    if (isNaN(price) || price < 0) {
      errors.price = '*Price must be a number.';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Product</h2>
      <label>
        Name:
        <input type="text" value={product.name} name="name" onChange={handleInputChange} />
      </label>
      {errors.name && <span className="error-message" style={{color:'red'}}>{errors.name}</span>}
      <br />
      <label>
        Description:
        <textarea value={product.description} name="description" onChange={handleInputChange} />
      </label>
      {errors.description && <span className="error-message" style={{color:'red'}}>{errors.description}</span>}
      <br />
      <label>
        Category:
        <input type="text" value={product.category} name="category" onChange={handleInputChange} />
      </label>
      {errors.category && <span className="error-message" style={{color:'red'}}>{errors.category}</span>}
      <br />
      <label>
        Quantity:
        <input type="text" value={product.quantity} name="quantity" onChange={handleInputChange} />
      </label>
      {errors.quantity && <span className="error-message" style={{color:'red'}}>{errors.quantity}</span>}
      <br />
      <label>
        Price:
        <input type="text" value={product.price} name="price"  onChange={handleInputChange} />
      </label>
      {errors.price && <span className="error-message" style={{color:'red'}}>{errors.price}</span>}
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default NewProductForm;
