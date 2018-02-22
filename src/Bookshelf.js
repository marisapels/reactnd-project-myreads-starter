import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render(){
            const title = this.props.title
            const id = this.props.id

            return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter(book => book.shelf === id).map(book => (
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

    export default BookShelf