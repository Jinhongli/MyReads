import React from 'react';
import {Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';

import Header from './component/Header';
import BookShelf from './component/BookShelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-content">
                <BookShelf type={1} number={2} />
                <BookShelf type={2} number={2} />
                <BookShelf type={3} number={2} />
              </div>
            </div>
          )}
        />
        <Route path="/search" />
      </div>
    );
  }
}

export default BooksApp;
