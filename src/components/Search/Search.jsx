import React, { use, useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
  const [text, setText] = useState(searchParams.get("q") || "");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setSearchParams({ q: text });
  }, [text]);

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            navigate(`/search?q=${text}`);
        }
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={text}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default Search;
