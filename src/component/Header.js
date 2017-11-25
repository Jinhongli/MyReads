import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';

class Header extends React.Component {
  onSearchHandler(history, value) {
    history.push(value ? ('/search?keyword=' + value) : '/' );
  }
  render() {
    const {history} = this.props;
    
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
                <SearchInput onSearch={(value) => this.onSearchHandler(history, value)} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
