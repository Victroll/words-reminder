import React, { useState } from 'react';
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

const HomeButton = ({ icon, inputMode, onClick }) => {
  const [input, setInput] = useState('');

  const onUpdateInput = newInput => {
    setInput(newInput);
  };

  const onClickHandler = () => {
    if (inputMode) {
      onClick(input);
      setInput('');
    } else {
      onClick();
    }
  };

  return (
    <div className='home-button'>
      <InputBase 
        className={`input ${inputMode
          ? 'show'
          : 'hide'}`}
        value={input}
        onChange={e => onUpdateInput(e.target.value)}
      />
      <Fab
        className={`${inputMode && 'input-mode'}`}
        onClick={onClickHandler}
      >
        <i className={Icons[icon]} />
      </Fab>
    </div>
  );
};

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
