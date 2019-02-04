import React from 'react';
import { PropTypes } from 'prop-types';

/** MUI Components */
import Modal from '@material-ui/core/Modal';

/** CSS */
import './index.css';

const TranslationModal = ({ word, translatedWord, onClose }) => (
  <Modal
    className='modal-container'
    onClose={onClose}
    disableAutoFocus
    open
  >
    <div className='modal-content'>
      <h1>{word}</h1>
      <hr />
      <span>{translatedWord}</span>
    </div>
  </Modal>
);

TranslationModal.propTypes = {
  word: PropTypes.string,
  translatedWord: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default TranslationModal;
