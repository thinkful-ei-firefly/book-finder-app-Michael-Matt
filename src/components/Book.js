import React from "react";
import "./book.css";

const Book = ({ volumeInfo, saleInfo }) => {
  const { title, authors, description, averageRating, imageLinks } = volumeInfo;

  return (
    <div className="book">
      <img className="book__image" src={imageLinks.thumbnail} />
      <div className="book__info">
        <h4 className="book__title">
          {title}{" "}
          <span>
            {saleInfo
              ? saleInfo.listPrice
                ? `Price: ${saleInfo.listPrice.amount}`
                : ""
              : ""}
          </span>
        </h4>
        <p>{authors ? authors[0] : ""}</p>
        <p>{description}</p>
        {averageRating ? <p>Rating: {averageRating}/5</p> : ""}
        {saleInfo ? (
          saleInfo.buyLink ? (
            <a target="_blank" href={saleInfo.buyLink}>
              Buy Now!
            </a>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Book;
