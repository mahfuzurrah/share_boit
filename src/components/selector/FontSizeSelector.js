import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FontSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("Heading 01.");
  const [showOptions, setShowOptions] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setShowOptions(false);
  };

  return (
    <div className="custom-selector">
      <label htmlFor="fontSizeSelector">Heading for Content</label>
      <div className={`dropdown ${showOptions ? "open" : ""}`}>
        <div
          className="selected-size form-control "
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectedSize} {showOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <ul className="options">
          <li onClick={() => handleSizeChange("Heading 01.")}>Heading 01.</li>
          <li onClick={() => handleSizeChange("Heading 02.")}>
            <h2>Heading 02.</h2>
          </li>
          <li onClick={() => handleSizeChange("Heading 03.")}>
            <h1>Heading 03.</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FontSizeSelector;
