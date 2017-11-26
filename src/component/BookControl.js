import React from 'react';
import PropTypes from 'prop-types';

class BookControl extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  };
  state = {
    showMenu: false,
  };

  onDropdownClick(e) {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu,
      };
    });
  }
  onDropdownBlur(e) {
    if (e.currentTarget === this.refs.controlBtn) {
      return false;
    }
    this.setState({
      showMenu: false
    });
  }

  onDropdownItemClick(to) {
    console.log(to)
  }

  render() {
    const { color } = this.props;
    return (
      <div
        className={
          'dropdown book-control' + (this.state.showMenu ? ' is-active' : '')
        }
        onClick={(e) => this.onDropdownClick(e)}
        onBlur={(e) => this.onDropdownBlur(e)}
        ref="controlBtn"
      >
        <div className="dropdown-trigger">
          <button className="button" style={{ backgroundColor: color }}>
            <span className="icon">
              <i className="fa fa-bars" />
            </span>
          </button>
        </div>

        <div className="dropdown-menu">
          <div className="dropdown-content">
            <a className="dropdown-item has-text-grey-light">Move to...</a>
            <a
              className="dropdown-item"
              onClick={() => this.onDropdownItemClick(1)}
            >
              Currently Reading
            </a>
            <a
              className="dropdown-item"
              onClick={() => this.onDropdownItemClick(2)}
            >
              Want to Read
            </a>
            <a
              className="dropdown-item"
              onClick={() => this.onDropdownItemClick(3)}
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
