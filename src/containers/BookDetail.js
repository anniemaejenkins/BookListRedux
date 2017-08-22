import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <h2 className="instructions">Select a book to get started!</h2>
      )
    }
    return (
      <div className="container">
        <div className="col-lg-4">
          <h3 className="details"> Details: </h3>
          <h4 className="title">{this.props.book.title}</h4>
          <p className="pages">{this.props.book.pages} pages</p>
          <p className="author">Author: {this.props.book.author}</p>
          <p className="price">Price: ${this.props.book.price} USD</p>
          <p className="published">Published: {this.props.book.published_date} by {this.props.book.publisher}</p>
          <p className="genre">Genre: {this.props.book.category.join(", ")} </p>
        </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
