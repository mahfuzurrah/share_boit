import React from 'react';

function Input({ type, placeholder, value, onChange, label }) {
  return (
    <div className='input_area'>
      {label && <label>{label}</label>}
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Enter text'}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

export default Input;
