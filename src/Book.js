import React, { Component } from 'react'

class Book extends Component {
    render(){
            const title = this.props.title
            const authors = this.props.authors.join(", ")
            const backgroundImage = this.props.backgroundImage
            const coverStyle =  {width: 128, height: 192, backgroundImage: 'url(' + backgroundImage + ')'}


            return (
                <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={ coverStyle }></div>
                  <div className="book-shelf-changer">
                    <select>
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