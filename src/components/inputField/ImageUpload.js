// ImageUpload.js

import React, { useState } from "react";
import { IoImageOutline } from "react-icons/io5";

function ImageUpload({ id, onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Pass the file and id to the onUpload callback
    onUpload(file, id);
  };

  const handleUpload = () => {
    // Implement your file upload logic here if needed

    // Reset selectedFile after upload
    setSelectedFile(null);
  };

  return (
    <div className="input_area img_upload">
      {!selectedFile && (
        <label htmlFor={`imageUpload${id}`} className="upload-button">
          <IoImageOutline className="icons" /> Upload Image
        </label>
      )}
      <label htmlFor={`imageUpload${id}`} className="upload-label">
        {selectedFile && (
          <div className="upload_file_name">
            <IoImageOutline className="icons" /> <p>{selectedFile.name}</p>
          </div>
        )}
        <input
          type="file"
          id={`imageUpload${id}`}
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          className="form-control"
        />
      </label>
      <button onClick={handleUpload} className="btn">
        Upload
      </button>
    </div>
  );
}

export default ImageUpload;
