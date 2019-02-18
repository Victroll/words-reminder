import React from 'react';

/** Material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

/** CSS */
import './index.css';

const Loader = () => (
  <Dialog open className="loader">
    <div className="loading-container">
      <DialogTitle className="search-container">
        <i className="fas fa-search" />
      </DialogTitle>
      <div className="animated-object object-1" />
      <div className="animated-object object-2" />
    </div>
  </Dialog>
);

export default Loader;
