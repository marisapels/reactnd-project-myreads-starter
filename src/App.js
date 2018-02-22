import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  myShelves = [
    {
      id: 'currentlyReading',
      title: 'Currently Reading'
    },
    {
      id: 'wantToRead',
      title: 'Want to Read'
    },
    {
      id: 'read',
      title: 'Read'
    }
  ]

  state = {
    myBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((myBooks) =>{
    this.setState({ myBooks })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf).then(() =>{
    book.shelf = shelf
    this.setState((state) => ({
      myBooks: state.myBooks.filter(item => item.id !== book.id).concat([book])
    }))})
  }
    

  render() {
    return (
      <div className="app">

      <Route exact path="/" render={() =>(
        <ListBooks 
        title="MyReads" 
        shelves={this.myShelves} 
        books={this.state.myBooks} 
        onChangeShelf={this.changeShelf} 
        />
      )}/>

      <Route  path="/search" render={() =>(
        <SearchBooks 
            onChangeShelf={this.changeShelf}
            books={this.state.myBooks} 
        />
      )}/>

      </div>
    )
  }
}

export default BooksApp
