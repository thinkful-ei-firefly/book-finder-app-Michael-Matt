import React from "react";

const SearchForm = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <select>
          <option>ebooks</option>
          <option>free-ebooks</option>
          <option>full</option>
          <option>paid-ebooks</option>
          <option>partial</option>
        </select>
        <select>
          <option>all</option>
          <option>books</option>
          <option>magazines</option>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
