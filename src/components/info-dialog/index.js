import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

/** Material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

/** CSS */
import './index.css';

const InfoDialog = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => onClose(), 1500);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="info-dialog">
      <div className="info-dialog-container">
        <DialogTitle className="check-container">
          <i className="fas fa-check" />
        </DialogTitle>
      </div>
    </Dialog>
  );
};

InfoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default InfoDialog;
