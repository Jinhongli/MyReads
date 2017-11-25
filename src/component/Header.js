import React from 'react';

import SearchInput from './SearchInput';

const Header = () => (
  <nav className="list-books-title">
  <div className="container">
  <div className="level">
    <div className="level-left">
      <div className="level-itme">
        <h1 className="is-size-2 has-text-white">My Reads</h1>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <SearchInput />
      </div>
    </div>
  </div>
  </div>
  </nav>  
);

export default Header;
