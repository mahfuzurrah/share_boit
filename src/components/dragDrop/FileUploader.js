import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const FileUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <div
      className={`file-uploader ${isDragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="upload-area">
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded Cover"
            className="uploaded-cover"
          />
        ) : (
          <>
            <label htmlFor="fileInput" className="upload-label">
              <AiOutlineCloudUpload className="cloud-icon" />
              <p>Drag & Drop a file here</p>
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden-input"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
