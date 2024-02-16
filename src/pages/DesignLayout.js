import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import TextArea from "../components/inputField/TextArea";
import FileUploader from "../components/dragDrop/FileUploader";

function DesignLayout() {
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
            <FileUploader/>
            <TextArea
              label="Description"
              placeholder="Journalist Role sample"
            />
            <div className="btn_area">
              <Link to="/">
                <button className="btn">Design Layout</button>
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
