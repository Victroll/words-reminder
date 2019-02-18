import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

/** MUI Components */
import Fab from '@material-ui/core/Fab';

/** Components */
import Dictionary from '../dictionary';

/** API */
import { getAll } from '../../API';

/** CSS */
import './index.css';

const DictionaryButton = ({ dictionaryMode, onClick }) => {
  // Sets if the input is being shown
  const [showDictionary, setShowDictionary] = useState(false);
  // Sets if the fadeOut animation has to happen
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);
  // Previous dictionaryMode
  const [previousInputMode, setPreviousInputMode] = useState(dictionaryMode);
  // Data to show
  const [data, setData] = useState([]);

  useEffect(() => {
    // When dictionaryMode changes from true to false, hide the Input component
    if (previousInputMode && !dictionaryMode) {
      setFadeOutAnimation(true);
    }
    setPreviousInputMode(dictionaryMode);
  }, [dictionaryMode]);

  useEffect(() => {
    if (showDictionary) {
      setData(getAll());
    }
  }, [showDictionary]);

  /**
   * Handler for managing the click event in the button.
   * If dictionaryMode is true, the parent onClick function is called
   * with the content of the Input element. Also, the text is cleared
   * and the fade out animation is activated.
   *
   * If dictionaryMode is false, call onClick function without content
   * and show the Input element.
   *
   * @param {Event} e Mouse event
   */
  const onClickHandler = e => {
    if (dictionaryMode) {
      onClick();
      setFadeOutAnimation(true);
    } else {
      onClick();
      setShowDictionary(true);
    }
    e.stopPropagation();
  };

  return (
    <div className='dictionary-button' > {/* eslint-disable-line */}
      {showDictionary && (
        <Dictionary
          className={`${fadeOutAnimation && 'fade-out'}`}
          onAnimationEnd={({ animationName }) => {
            if (animationName === 'fade-out') {
              setShowDictionary(false);
              setFadeOutAnimation(false);
            }
          }}
          data={data}
          // Ddata={[
          //   {
          //     word: 'worasdasdasdd1',
          //     translatedWord: 'translateasdasdasdasdad1'
          //   },
          //   {
          //     word: 'word2',
          //     translatedWord: 'translated2'
          //   },
          //   {
          //     word: 'word3',
          //     translatedWord: 'translated3'
          //   },
          //   {
          //     word: 'word4',
          //     translatedWord: 'translated4'
          //   }
          // ]}
        />
      )}
      <Fab
        className={`${dictionaryMode && 'dictionary-mode'}`}
        onClick={onClickHandler}
      >
        <i className="fas fa-book" />
      </Fab>
    </div>
  );
};

DictionaryButton.propTypes = {
  dictionaryMode: PropTypes.bool,
  onClick: PropTypes.func
};

DictionaryButton.defaultProps = {
  dictionaryMode: false,
  onClick: () => {}
};

export default DictionaryButton;
