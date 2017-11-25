import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';

const Header = () => (
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
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
