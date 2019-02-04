import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/** MUI Components */
import Fab from '@material-ui/core/Fab';
import InputBase from '@material-ui/core/InputBase';

/** CSS */
import './index.css';

const Icons = {
  edit: 'fas fa-book',
  search: 'fas fa-search',
  add: 'fas fa-plus'
};

class HomeButton extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  onUpdateInput = newInput => {
    this.setState({ input: newInput });
  };

  onClickHandler = () => {
    const { inputMode, onClick } = this.props;
    const { input } = this.state;
    if (inputMode) {
      onClick(input);
      this.setState({
        input: ''
      });
    } else {
      onClick();
    }
  };

  render() {
    const { icon, inputMode } = this.props;
    const { input } = this.state;
    return (
      <div className='home-button'>
        <InputBase 
          className={`input ${inputMode
            ? 'show'
            : 'hide'}`}
          value={input}
          onChange={e => this.onUpdateInput(e.target.value)}
        />
        <Fab
          className={`${inputMode && 'input-mode'}`}
          onClick={this.onClickHandler}
        >
          <i className={Icons[icon]} />
        </Fab>
      </div>
    );
  }
}

HomeButton.propTypes = {
  icon: PropTypes.string,
  inputMode: PropTypes.bool,
  onClick: PropTypes.func
};

HomeButton.defaultProps = {
  inputMode: false,
  onClick: () => {}
};

export default HomeButton;
