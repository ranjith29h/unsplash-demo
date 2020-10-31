import React, { useState, useRef } from "react";
import "./search__handler.css";

export default function SearchHandler({ handleSubmit, handleClear }) {
  const formRef = useRef();
  const [searchText, setSearchText] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchText);
  };

  const clearComplete = () => {
    formRef.current.reset();
    handleClear();
  };

  return (
    <div className="search__handler">
      <div className="container pt-4 pb-4">
        <form onSubmit={handleFormSubmit} ref={formRef}>
          <div className="input-group">
            <input
              type="text"
              className="form-control search__input"
              placeholder="Try 'apple' or 'coffee' !"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-dark" type="button">
                Search
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={clearComplete}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
