import React from 'react';
import { PropTypes } from 'prop-types';

/** Literals */
import { homeTxt } from '../../utils/literals';

/** CSS */
import './index.css';

const HomeLastWord = ({ lastWord }) => (
  <div className="home-last-word">
    {lastWord ? <h2>{homeTxt.lastWords}</h2> : <h1>{homeTxt.addOne}</h1>}
    <h1>{lastWord}</h1>
  </div>
);

HomeLastWord.propTypes = {
  lastWord: PropTypes.string
};

HomeLastWord.defaultProps = {
  lastWord: null
};

export default HomeLastWord;
