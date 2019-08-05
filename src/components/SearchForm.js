import React from "react";

class SearchForm extends React.Component {
  state = {
    text: '',
    bookType: 'full',
    printType: 'all',
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log('submitted', this.state.printType, this.state.bookType, this.state.text)
            this.props.handleSearchSubmit(this.state)
          }
        }>
          <button>Search</button>
          <label>Search books now!<input type="text" name="text" value={this.state.text} onChange={this.handleChange}/></label>
          <label> Select a book type<select name="bookType" value={this.state.bookType} onChange={this.handleChange}>
            <option value="ebooks">ebooks</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="full">full</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="partial">partial</option>
          </select></label>
          <label>Choose a print type<select name="printType" value={this.state.printType} onChange={this.handleChange}>
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select></label>
        </form>
      </div>
      );
    };
  }

export default SearchForm;
