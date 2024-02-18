import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FileUploader from "../components/dragDrop/FileUploader";
import InputField from "../components/inputField/Input";
import TextArea from "../components/inputField/TextArea";
import FontSizeSelector from "../components/selector/FontSizeSelector";
import ImageUpload from "../components/inputField/ImageUpload";

function DesignLayout() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [fileNames, setFileNames] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleBackgroundImageUpload = (file, id) => {
    // Update file names using the provided id
    setFileNames((prevFileNames) => ({
      ...prevFileNames,
      [id]: file.name,
    }));
  };

  return (
    <>
      <div className="back_top_bar">
        <Link to="/csharebot" className="back_btn">
          <IoIosArrowBack className="icons" />
        </Link>
      </div>

      <div className="config_page page">
        <div className="container">
          <div className="section_title">
            <h1>Content for Sharebot</h1>
            <p>Upload document or write detailed description</p>
          </div>
          <hr className="my-5" />

          <form className="design_layout_box">
            <FileUploader />
            <div className="input_group">
              <InputField
                type="text"
                placeholder="Name to be displayed on ShareBot"
                value={name}
                onChange={handleNameChange}
                label="Title Name"
              />
              <InputField
                type="text"
                placeholder="Journalist"
                value={role}
                onChange={handleRoleChange}
                label="Subtitle"
              />
            </div>
            <div className="input_group">
              <FontSizeSelector />
              <div className="file_upload_area">
                <label htmlFor="">Sharebot Avatar</label>
                <ImageUpload id={1} onUpload={handleBackgroundImageUpload} />
                {fileNames[1] && (
                  <div className="uploaded_file_name">
                    <IoImageOutline className="icons" /> <p>{fileNames[1]}</p>
                  </div>
                )}
              </div>
            </div>
            <TextArea
              label="Summary of Content"
              placeholder="Add Description"
            />
            <div className="btn_area">
              <Link to="/csharebot">
                <button className="btn">Cancel</button>
              </Link>
              <Link to="/blog">
                <button className="btn">Preview</button>
              </Link>
              <Link to="/">
                <button className="btn_sec">Publish</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DesignLayout;
