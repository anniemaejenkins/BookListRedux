import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  constructor(){
    super();

    this.state = {
      title: ''
    }
    this._handleInput = this._handleInput.bind(this);
    // this._addBook = this._addBook.bind(this);
  }

  _handleInput(event){
    let title = event.target.value
    this.setState({title})
  }

// preventDefault keeps the form from submitting in case someone hits enter after
// they type
  // _addBook(event){
  //   event.preventDefault();
  //   console.log(this.state.title);
  // }

  render() {

    //must create a map function here to return the following:

    //     <li
    //       key={book.id}
    //       onClick={() => this.props.selectBook(book)}
    //       className="list-group-item">{book.title}</li>

    let books = this.props.books.map((book, index)=>{
      return (
        <li key={index} onClick={ () => this.props.selectBook(book)}>{book.title}</li>
      )
    })
    return(
      <div>
        <ul className="list-group col-sm-4">
          {books}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return {
    books: state.books,
  };
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
