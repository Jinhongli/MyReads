import React from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';

import Header from './component/Header';
import ListBooks from './component/ListBooks';
import SearchResult from './component/SearchResult';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={Header} />
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchResult} />
      </div>
    );
  }
}

export default BooksApp;
