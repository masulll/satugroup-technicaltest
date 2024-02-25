"use client";
import { useState, useEffect } from "react";

const SaveButton = ({ news }) => {
  const [savedNews, setSavedNews] = useState(
    JSON.parse(localStorage.getItem("savedNews")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
  }, [savedNews]);

  const handleSaveClick = () => {
    setSavedNews((prevSavedNews) => [...prevSavedNews, news]);
  };

  return (
    <button
      onClick={handleSaveClick}
      className="p-3 bg-sky-400 hover:bg-sky-300 transition-all rounded-md"
    >
      Save
    </button>
  );
};

export default SaveButton;
