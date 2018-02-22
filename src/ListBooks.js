import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    render(){
            const title = this.props.title

            return (
                <div className="list-books">
                <div className="list-books-title">
                  <h1>{title}</h1>
                </div>
                <div className="list-books-content">
                       {this.props.shelves.map(shelve => (
                        <div key={shelve.id}>
                            <Bookshelf
                                id={shelve.id}
                                title={shelve.title}
                                shelf={shelve.id}
                                books={this.props.books}
                                onChangeShelf={this.props.onChangeShelf}
                            />
                        </div>
                    ))}
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )
        }
    }

    export default ListBooks