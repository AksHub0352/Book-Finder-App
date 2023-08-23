import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import "./Loader.jsx";

import axios from "axios";
import Loader from "./Loader";

const SearchBar = (props) => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_BOOK_FINDER_API_KEY

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="search-form">
        <div className="search-form-elem flex flex-sb justify-between bg-white">
          <input
            type="text"
            className="form-control w-full text-purple-500"
            placeholder="The Lost World..."
            width="80%"
            onChange={handleChange}
          />
          <button type="submit" className="flex flex-c" onClick={handleSubmit}>
            <FaSearch className="text-purple text-purple-500 ml-2" size={40} />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap  ml-[10%] mr-[10%]">
      {result?.map((book) => (
        <Loader book={book} />
      ))}
      </div>
    </>
  );
};

export default SearchBar;
