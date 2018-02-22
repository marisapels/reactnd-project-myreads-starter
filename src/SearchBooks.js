import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class SearchBooks extends Component {

    state = {
        searchResult: []
      }

    doSearch = e => {
        const searchTerm = e.target.value.trim()
       if (searchTerm) {
         BooksAPI.search(searchTerm).then(searchResult => {

            if (searchResult.error){
                this.setState({searchResult: []}) 
            } else {
                
                this.setState({searchResult: searchResult.map(item => {
                    let book = this.props.books.find(book => book.id === item.id)
                    if (book === undefined){
                        return item
                    }else {
                        return book
                    }
                    
                })})
            }
        })
       } else {
           this.setState({searchResult: []})
       }
    }

    render(){
            return (
                <div className="search-books">
                    <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
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
            )
        }
    }

export default SearchBooks