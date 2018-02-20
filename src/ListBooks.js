import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

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
                            />
                        </div>
                    ))}
                </div>
                <div className="open-search">
                  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
              </div>
            )
        }
    }

    export default ListBooks