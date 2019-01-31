import React from 'react';

/** Models */
import { childrenModel } from '../../utils/models';

/** CSS */
import './index.css';

const AppLayout = ({ children }) => (
  <div className='app-layout'>
    {children}
  </div>
);

AppLayout.propTypes = {
  children: childrenModel
};

export default AppLayout;
