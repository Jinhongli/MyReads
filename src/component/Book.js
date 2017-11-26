import React from 'react';
import PropTypes from 'prop-types';

import BookControl from './BookControl';

class Book extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      cover: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {
      info: { name, authors, cover, showMenu, id },
      color,
      toggleBookMenu,
    } = this.props;
    return (
      <div className="column">
        <div className="card book">
          <div className="card-image">
            <figure className="image">
              <img src={cover} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span className="is-size-7">{name}</span>
              <br />
              <span className="is-size-7 has-text-grey-light">
                {authors.join(', ')}
              </span>
            </div>
          </div>
          <BookControl
            color={color}
            showMenu={showMenu}
            toggleBookMenu={() => toggleBookMenu(id)}
          />
        </div>
      </div>
    );
  }
}

export default Book;
