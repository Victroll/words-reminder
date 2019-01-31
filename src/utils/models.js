import PropTypes from 'prop-types';

export const childrenModel = PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]);
