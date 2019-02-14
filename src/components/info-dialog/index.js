import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

/** Material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = props => <Slide direction='up' {...props} />;

const InfoDialog = ({ isOpen, onClose }) => {

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => onClose(), 2500);
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogTitle>Word added!</DialogTitle>
    </Dialog>
  );
};

InfoDialog.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default InfoDialog;
