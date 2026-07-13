import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/eats/stores/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form className="search-form" onSubmit={searchHandler}>
      <div className="search-box">

        <input
          type="text"
          placeholder="Search pizza, burger, biryani..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button type="submit">
          <FaSearch />
        </button>

      </div>
    </form>
  );
};

export default Search;