import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class SearchBooks extends Component {

    state = {
        searchResult: []
      }

    doSearch = e => {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
         BooksAPI.search(searchTerm).then(searchResult => {

            if (searchResult.error){
                this.setState({searchResult: []});
            } else {
                this.setState({searchResult: searchResult.map(item => {
                    let book = this.props.books.find(book => book.id === item.id);
                    return book || item;
                })})
            }
        })
       } else {
           this.setState({searchResult: []});
       }
    }

    render(){
            return (
                <div className="search-books">
                    <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.doSearch}/>
                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.searchResult.map(book => (
                        <li key={book.id}>
                            <Book book={book} onChangeShelf={this.props.onChangeShelf} />
                        </li>
                    ))}
                    </ol>
                    </div>
                </div>
            );
        }
    }

export default SearchBooks