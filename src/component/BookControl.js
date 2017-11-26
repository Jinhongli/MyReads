import React from 'react';
import PropTypes from 'prop-types';

class BookControl extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  };

  onDropdownClick(e) {
    e.stopPropagation();
    this.props.toggleBookMenu(this.props.id);
  }
  onDropdownItemClick(e, to) {
    e.preventDefault();
    console.log(`change book type to ${to}`);
  }

  render() {
    const { color, showMenu, isRight, isUp } = this.props;
    return (
      <div
        className={
          'dropdown book-control' + (showMenu ? ' is-active' : '') + (isRight ? ' is-right' : '') + (isUp ? ' is-up' : '')
        }
      >
        <div className="dropdown-trigger">
          <button
            className={'button ' + color }
            onClick={e => this.onDropdownClick(e)}
            ref="controlBtn"
          >
            <span className="icon">
              <i className={'fa' + (showMenu ? ' fa-close' : ' fa-bars')} />
            </span>
          </button>
        </div>

        <div className="dropdown-menu">
          <div className="dropdown-content">
            <a className="dropdown-item has-text-grey-light disabled">Move to...</a>
            <a
              className="dropdown-item"
              onClick={e => this.onDropdownItemClick(e, 1)}
            >
              Currently Reading
            </a>
            <a
              className="dropdown-item"
              onClick={e => this.onDropdownItemClick(e, 2)}
            >
              Want to Read
            </a>
            <a
              className="dropdown-item"
              onClick={e => this.onDropdownItemClick(e, 3)}
            >
              Read
            </a>
            <a className="dropdown-item">None</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BookControl;
