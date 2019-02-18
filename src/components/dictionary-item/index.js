import React from 'react';
import { PropTypes } from 'prop-types';

/** MUI Components */
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/** Models */
import { dictionaryItemDataModel } from '../../utils/models';

/** CSS */
import './index.css';

const DictionaryItem = ({ expanded, data, onClick }) => {
  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={onClick}
      className="dictionary-item"
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        className="dictionary-summary"
      >
        <h1>{data.word}</h1>
        <p>{`${data.best}`}</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="dictionary-detail">
        <ul>
          {data.translations.map(translation => (
            <li key={translation}>{translation}</li>
          ))}
        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

DictionaryItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  data: dictionaryItemDataModel.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DictionaryItem;
