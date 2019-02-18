import React from 'react';
import { PropTypes } from 'prop-types';

/** Literals */
import { homeTxt } from '../../utils/literals';

/** CSS */
import './index.css';

const HomeLastWord = ({ lastWord }) => (
  <div className='home-last-word'>
    {lastWord[0]
      ? <h2>{homeTxt.lastWords}</h2>
      : <h1>{homeTxt.addOne}</h1>
    }
    <h1>
      {lastWord[0]
        ? lastWord[0]
        : null
      }
    </h1>
  </div>
);

HomeLastWord.propTypes = {
  lastWord: PropTypes.arrayOf(PropTypes.string)
};

export default HomeLastWord;
