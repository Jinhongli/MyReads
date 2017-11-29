import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

import SearchInput from './SearchInput';

class Header extends React.Component {
  onSearchHandler(history, value) {
    history.push(value ? '/search?keyword=' + value : '/');
    this.props.startLoading();
    BooksAPI.search(value)
      .then(books => {
        console.log(books)
        return books.error ? books.items : books.map(book => {
          book.showMenu = false;
          return book;
        })
      }
      )
      .then(books => {
        return this.props.onSearchHandler(books)
      });
  }
  render() {
    const { history } = this.props;

    return (
      <nav className="list-books-title">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-itme">
                <Link to="/" className="is-size-2 has-text-white">
                  My Reads
                </Link>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <SearchInput
                  onSearch={value => this.onSearchHandler(history, value)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
