import React from "react";

function TextArea({ type, placeholder, value, onChange, label }) {
  return (
    <div className="input_area">
      {label && <label>{label}</label>}
      <textarea
        name="text"
        id=""
        cols="30"
        rows="8"
        className="text_area"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextArea;
