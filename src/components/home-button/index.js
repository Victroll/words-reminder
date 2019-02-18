import React, { useState, useEffect } from 'react';
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
  // Sets if the input is being shown
  const [showInput, setShowInput] = useState(false);
  // Sets if the fadeOut animation has to happen
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);
  // Previous inputMode
  const [previousInputMode, setPreviousInputMode] = useState(inputMode);

  useEffect(() => {
    // When inputMode changes from true to false, hide the Input component
    if (previousInputMode && !inputMode) {
      setFadeOutAnimation(true);
    }
    setPreviousInputMode(inputMode);
  }, [inputMode]);

  const onUpdateInput = newInput => {
    setInput(newInput);
  };

  /**
   * Handler for managing the click event in the button.
   * If inputMode is true, the parent onClick function is called
   * with the content of the Input element. Also, the text is cleared
   * and the fade out animation is activated.
   *
   * If inputMode is false, call onClick function without content
   * and show the Input element.
   *
   * @param {Event} e Mouse event
   */
  const onClickHandler = e => {
    if (inputMode) {
      onClick(input);
      setInput('');
      setFadeOutAnimation(true);
    } else {
      onClick();
      setShowInput(true);
    }
    e.stopPropagation();
  };

  const onBlurComponent = e => {
    if (inputMode) {
      onClickHandler(e);
    }
  };

  return (
    <div className='home-button' onClick={onBlurComponent}> {/* eslint-disable-line */}
      {showInput && (
        <InputBase
          className={`input ${fadeOutAnimation && 'fade-out'}`}
          value={input}
          onChange={e => onUpdateInput(e.target.value)}
          onClick={e => e.stopPropagation()}
          autoFocus
          onAnimationEnd={({ animationName }) => {
            // Hide the Input element when the fade out animation finish
            if (animationName === 'fade-out-input') {
              setShowInput(false);
              setFadeOutAnimation(false);
            }
          }}
        />
      )}
      <Fab className={`${inputMode && 'input-mode'}`} onClick={onClickHandler}>
        <i className={Icons[icon]} />
      </Fab>
    </div>
  );
};

HomeButton.propTypes = {
  icon: PropTypes.string.isRequired,
  inputMode: PropTypes.bool,
  onClick: PropTypes.func
};

HomeButton.defaultProps = {
  inputMode: false,
  onClick: () => {}
};

export default HomeButton;
