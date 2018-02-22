import React, { Component } from 'react'



class Book extends Component {
    render(){
            const book = this.props.book
            const title = book.title

            var authors = []
            if (book.authors){
              authors = book.authors.join(", ")
            }

            var backgroundImage
            if (book.imageLinks){
              backgroundImage = book.imageLinks.smallThumbnail
            }
            
            const coverStyle =  {width: 128, height: 192, backgroundImage: 'url(' + backgroundImage + ')'}
            const shelf = book.shelf
          

            return (
                <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={ coverStyle }></div>
                  <div className="book-shelf-changer">
                    <select defaultValue={shelf ? shelf : "none" } onChange={(e) => this.props.onChangeShelf(book,e.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
              </div>
            )
        }
    }

    export default Book