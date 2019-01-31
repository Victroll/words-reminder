import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/** MUI Components */
import Fab from '@material-ui/core/Fab';
import InputBase from '@material-ui/core/InputBase';

/** CSS */
import './index.css';

const Icons = {
  edit: 'fas fa-book',
  search: 'fas fa-search',
  add: 'fas fa-plus'
};

class HomeButton extends Component {
  toggleInput = () => {
    console.log('asd');
  };

  render() {
    const { icon, inputMode, onClick } = this.props;
    return (
      <div className='home-button'>
        <InputBase className={`input ${inputMode
          ? 'show'
          : 'hide'}`}
          />
        <Fab
          className={`${inputMode && 'input-mode'}`}
          onClick={onClick}
        >
          <i className={Icons[icon]} />
        </Fab>
      </div>
    );
  }
}

HomeButton.propTypes = {
  icon: PropTypes.string,
  inputMode: PropTypes.bool,
  onClick: PropTypes.func
};

HomeButton.defaultProps = {
  inputMode: false,
  onClick: () => {}
};

export default HomeButton;
