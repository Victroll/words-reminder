import React from 'react';
import { PropTypes } from 'prop-types';

/** Literals */
import { homeTxt } from '../../utils/literals';

/** CSS */
import './index.css';

const HomeLastWord = ({ lastWord }) => (
  <div className='home-last-word'>
    <h2>
      {homeTxt.lastWords}
    </h2>
    <h1>
      {lastWord[0]
        ? lastWord[0]
        : <i className='far fa-frown'/>}
    </h1>
  </div>
);

HomeLastWord.propTypes = {
  lastWord: PropTypes.arrayOf(PropTypes.string)
};

export default HomeLastWord;
