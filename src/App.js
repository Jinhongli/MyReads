import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import Header from './component/Header';
import ListBooks from './component/ListBooks';
import SearchResult from './component/SearchResult';

class BooksApp extends React.Component {
  state = {
    books: {
      current: [],
      want: [],
      read: [],
      none: []
    },
    searchResultBooks: [],
  };
  componentDidMount() {
    BooksAPI.getAll()
      .then(books =>
        books.map(book => {
          book.showMenu = false;
          return book;
        })
      )
      .then(books => {
        const current = books.filter(book => book.shelf === 'currentlyReading');
        const want = books.filter(book => book.shelf === 'wantToRead');
        const read = books.filter(book => book.shelf === 'read');
        this.setState({
          books: {
            current,
            want,
            read,
          },
        });
      });
  }
  onListBooksClick() {
    this.setState(prevState => {
      return {
        current: prevState.books.current.map(book => {
          book.showMenu = false;
          return book;
        }),
        want: prevState.books.want.map(book => {
          book.showMenu = false;
          return book;
        }),
        read: prevState.books.read.map(book => {
          book.showMenu = false;
          return book;
        }),
      };
    });
  }

  toggleBookMenu(type, id) {
    console.log(`show/hide ${type} book menu, book id: ${id}`);
    
    if (type === 'search') {
      this.setState(prevState => {
        return {
          searchResultBooks: prevState.searchResultBooks.map(book => {
            if (book.id === id) {
              book.showMenu = !book.showMenu;
            } else {
              book.showMenu = false;
            }
            return book;
          })
        }
      })
    }
    this.setState(prevState => {
      return {
        books: {
          current: prevState.books.current.map(book => {
            if (type === 'current' && book.id === id) {
              book.showMenu = !book.showMenu;
            } else {
              book.showMenu = false;
            }
            return book;
          }),
          want: prevState.books.want.map(book => {
            if (type === 'want' && book.id === id) {
              book.showMenu = !book.showMenu;
            } else {
              book.showMenu = false;
            }
            return book;
          }),
          read: prevState.books.read.map(book => {
            if (type === 'read' && book.id === id) {
              book.showMenu = !book.showMenu;
            } else {
              book.showMenu = false;
            }
            return book;
          }),
        }
      };
    });
  }
  onSearchHandler(books) {
    this.setState({
      searchResultBooks: books,
    });
  }
  render() {
    return (
      <div className="app">
        <Route
          path="/"
          render={props => (
            <Header
              {...props}
              onSearchHandler={books => this.onSearchHandler(books)}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <ListBooks
              {...props}
              books={this.state.books}
              toggleBookMenu={(type, id) => this.toggleBookMenu(type, id)}
              onListBooksClick={() => this.onListBooksClick()}
            />
          )}
        />
        <Route
          path="/search"
          render={props => (
            <SearchResult
              {...props}
              books={this.state.searchResultBooks}
              toggleBookMenu={(type, id) => this.toggleBookMenu(type, id)}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
