import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ImageUpload from "../components/inputField/ImageUpload";
import InputField from "../components/inputField/Input";
import TextArea from "../components/inputField/TextArea";

function Configuration() {
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
        <Link to="/" className="back_btn">
          <IoIosArrowBack className="icons" />
        </Link>
      </div>

      <div className="config_page page">
        <div className="container">
          <div className="section_title">
            <h1>Your Sharebots</h1>
            <p>
              Share a Thousand Words in One Screen: Unveil Limitless Information
              with Ease!
            </p>
          </div>
          <hr className="my-5" />

          <form>
            <div className="input_group">
              <InputField
                type="text"
                placeholder="Name to be displayed on ShareBot"
                value={name}
                onChange={handleNameChange}
                label="Sharebot Name"
              />
              <InputField
                type="text"
                placeholder="Journalist"
                value={role}
                onChange={handleRoleChange}
                label="Sharebot Role"
              />
            </div>
            <div className="input_group">
              <div className="file_upload_area">
                <label htmlFor="">Sharebot Background Image 1</label>
                <ImageUpload id={1} onUpload={handleBackgroundImageUpload} />
                {fileNames[1] && (
                  <div className="uploaded_file_name">
                    <IoImageOutline className="icons" /> <p>{fileNames[1]}</p>
                  </div>
                )}
              </div>
              <div className="file_upload_area">
                <label htmlFor="">Sharebot Background Image 2</label>
                <ImageUpload id={2} onUpload={handleBackgroundImageUpload} />
                {fileNames[2] && (
                  <div className="uploaded_file_name">
                    <IoImageOutline className="icons" /> <p>{fileNames[2]}</p>
                  </div>
                )}
              </div>
            </div>
            <TextArea
              label="Role Description"
              placeholder="You are a sales agent replying to a client"
            />
            <div className="btn_area">
              <Link to="/"><button className="btn">Cancel</button></Link>
              <Link to="/csharebot"><button className="btn_sec">Next</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Configuration;
