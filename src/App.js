import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import BookList from "./components/BookList";

class App extends Component {
  state = {
    books: [],
    apiKey: "AIzaSyBfvTsT5N3PxRGK0PtLuDtZ755WoGaTw8E"
  };

  handleSearchSubmit = ({ text, bookType, printType }) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&filter=${bookType}&printType=${printType}&key=${
        this.state.apiKey
      }`
    )
      .then(res => res.json())
      .then(books => {
            console.log(books);
            this.setState({ books: books.items })
          }
        );
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm handleSearchSubmit={this.handleSearchSubmit}/>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
