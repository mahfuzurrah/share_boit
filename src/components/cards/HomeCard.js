import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function HomeCard({ title, description, date, onDelete }) {
  return (
    <div className="card">
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className="btn" onClick={onDelete}>
        <span className="date">{date}</span>{" "}
        <span>
          <FaRegTrashAlt />
        </span>
      </button>
    </div>
  );
}

export default HomeCard;
