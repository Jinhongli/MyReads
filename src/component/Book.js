import React from 'react';
import PropTypes from 'prop-types';

import BookControl from './BookControl';

class Book extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageLinks: PropTypes.object.isRequired,
    }).isRequired,
    color: PropTypes.string.isRequired,
    toggleBookMenu: PropTypes.func.isRequired,
  };

  render() {
    const {
      info: { title, authors, imageLinks, showMenu, id },
      color,
      toggleBookMenu,
      isRight,
      isUp,
    } = this.props;
    return (
      <div className="column">
        <div className="card book">
          <div className="card-image">
            <figure className="image">
              <img src={imageLinks.thumbnail} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span className="book-title is-size-7">{title}</span>
              <span className="book-authors is-size-7 has-text-grey-light">
                {authors && authors[0]}
              </span>
            </div>
          </div>
          <BookControl
            color={color}
            showMenu={showMenu}
            toggleBookMenu={() => toggleBookMenu(id)}
            isRight={isRight}
            isUp={isUp}
          />
        </div>
      </div>
    );
  }
}

export default Book;
