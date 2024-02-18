import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Blog_img from "../assets/img/cover.png";
import BlogSwiper from "../components/swiper/BlogSwiper";
import ChatBot from "../components/chatBot/Chat";

function Blog() {
  const [showFullText, setShowFullText] = useState(false);

  const loremIpsumText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;

  const truncatedText = showFullText
    ? loremIpsumText
    : `${loremIpsumText.slice(0, 350)}...`;

  return (
    <>
      <div className="back_top_bar">
        <Link to="/csharebot" className="back_btn">
          <IoIosArrowBack className="icons" />
        </Link>
      </div>
      <div className="blog_page pb-5">
        <div className="blog_banner_img">
          <img src={Blog_img} alt="Blog_Cover_Image" />
        </div>

        <div className="container">
          <div className="section_title mt-5">
            <h2>My Blog / News</h2>
          </div>

          <div className="blog_subtitle_area">
            <h2>Subtitle</h2>
            <p className="desc">{truncatedText}</p>
            <p
              className="read_btn"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? "Read Less" : "Read More"}
            </p>
            <BlogSwiper />
            <div className="chat_bot_area">
            <ChatBot/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
