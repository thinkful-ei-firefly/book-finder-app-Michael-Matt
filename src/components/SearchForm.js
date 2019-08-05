import React from "react";
import "./searchForm.css";

class SearchForm extends React.Component {
  state = {
    text: "",
    bookType: "ebooks",
    printType: "all"
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(
              "submitted",
              this.state.printType,
              this.state.bookType,
              this.state.text
            );
            this.props.handleSearchSubmit(this.state);
          }}
          className="form"
        >
          <div className="form__inputs">
            <label className="form__label">
              Search books now!
              <input
                className="form__input"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </label>
            <label className="form__label">
              {" "}
              Select a book type
              <select
                className="form__select"
                name="bookType"
                value={this.state.bookType}
                onChange={this.handleChange}
              >
                <option value="ebooks">ebooks</option>
                <option value="free-ebooks">free-ebooks</option>
                <option value="full">full</option>
                <option value="paid-ebooks">paid-ebooks</option>
                <option value="partial">partial</option>
              </select>
            </label>
            <label className="form__label">
              Choose a print type
              <select
                className="form__select"
                name="printType"
                value={this.state.printType}
                onChange={this.handleChange}
              >
                <option value="all">all</option>
                <option value="books">books</option>
                <option value="magazines">magazines</option>
              </select>
            </label>
          </div>

          <button className="form__button">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
