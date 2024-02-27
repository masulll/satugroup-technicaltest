"use client";
import { useState, useEffect } from "react";
import { BookmarkSimple } from "@phosphor-icons/react";

const SaveButton = ({ news }) => {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
  }, [savedNews]);

  const handleSaveClick = () => {
    setSavedNews((prevSavedNews) => [...prevSavedNews, news]);
  };

  return (
    <button
      onClick={handleSaveClick}
      className="p-2  hover:bg-sky-300  hover:text-black transition-all rounded-lg"
    >
      <BookmarkSimple size={32} />
    </button>
  );
};

export default SaveButton;
