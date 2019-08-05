import React from "react";
import Book from "./Book";
import "./bookList.css";

const BookList = ({ books }) => {
  return (
    <div>
      <h1>BookList</h1>
      <div className="list">
        {books.map(book => (
          <Book {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
