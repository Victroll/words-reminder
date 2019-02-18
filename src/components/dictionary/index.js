import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

/** Components */
import DictionaryItem from '../dictionary-item/index';

/** Models */
import { dictionaryItemDataModel } from '../../utils/models';

/** CSS */
import './index.css';

const Dictionary = ({ className, onAnimationEnd, data }) => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleExpansion = id => {
    if (expandedItem === id) {
      setExpandedItem(-1);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <div
      className={`dictionary ${className || ''}`}
      onAnimationEnd={onAnimationEnd}
    >
      <ul>
        {data.map((item, i) => (
          <li key={item.word}>
            <DictionaryItem
              expanded={expandedItem === i}
              data={item}
              onClick={() => handleExpansion(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

Dictionary.propTypes = {
  className: PropTypes.string,
  onAnimationEnd: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(dictionaryItemDataModel).isRequired
};

Dictionary.defaultProps = {
  className: null
};

export default Dictionary;
