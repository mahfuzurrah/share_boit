import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import Card from "../components/cards/HomeCard";

function Home() {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: "CreatedShareBot#1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      date: "12 September 2023",
    },
    {
      id: 2,
      title: "CreatedShareBot#2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      date: "12 September 2023",
    },
    {
      id: 3,
      title: "CreatedShareBot#3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      date: "12 September 2023",
    },
    {
      id: 4,
      title: "CreatedShareBot#4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      date: "12 September 2023",
    },
  ]);

  const handleDeleteCard = (id) => {
    const updatedCardData = cardData.filter((card) => card.id !== id);
    setCardData(updatedCardData);
  };

  return (
    <div className="home_page page">
      <div className="container">
        <div className="home_flex_header">
          <div className="section_title">
            <h1>Your Sharebots</h1>
            <p>
              Share a Thousand Words in One Screen: Unveil Limitless Information
              with Ease!
            </p>
          </div>
          <div className="card">
            <p>Share a Thousand Words of information in a single screen.</p>
            <Link to="/configuration">
              <button className="btn">
                <LuPlus /> Create New ShareBot
              </button>
            </Link>
          </div>
        </div>
        <hr className="my-5" />

        <div className="row bot_card">
          {cardData.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-sm-12">
              <Card
                title={card.title}
                description={card.description}
                date={card.date}
                onDelete={() => handleDeleteCard(card.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
