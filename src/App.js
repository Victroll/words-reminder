import React, { Component } from 'react';
import './utils/font-awesome/all';

/** API */
import { saveNewWord, getLastSavedWord } from './API';

/** Components */
import AppLayout from './components/app-layout/index';
import HomeButton from './components/home-button/index';
import HomeLastWord from './components/home-last-word';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showSearch: false,
      showAdd: false,
      showEdit: false,
      lastWord: [null]
    };
  }

  componentDidMount() {
    this.setState({
      lastWord: getLastSavedWord()
    });
  }

  onToggleInputs = id => {
    const { showSearch, showAdd, showEdit } = this.state;
    switch (id) {
      case 'search':
        this.setState({
          showSearch: !showSearch,
          showAdd: false,
          showEdit: false
        });
        break;
      case 'add':
        this.setState({
          showSearch: false,
          showAdd: !showAdd,
          showEdit: false
        });
        break;
      case 'edit':
        this.setState({
          showSearch: false,
          showAdd: false,
          showEdit: !showEdit
        });
        break;
    }
  };

  onAddHandler = input => {
    const { showAdd } = this.state;
    this.onToggleInputs('add');
    if (showAdd) {
      saveNewWord(input)
        .then(
          res => this.setState({
            lastWord: res
          })
        );
    }
  }

  render() {
    const { showSearch, showAdd, showEdit, lastWord } = this.state;
    return (
      <AppLayout>
        <HomeLastWord lastWord={lastWord} />
        <HomeButton
          icon='search'
          inputMode={showSearch}
          onClick={() => this.onToggleInputs('search')}
        />
        <HomeButton
          icon='add'
          inputMode={showAdd}
          onClick={this.onAddHandler}
        />
        <HomeButton
          icon='edit'
          inputMode={showEdit}
          onClick={() => this.onToggleInputs('edit')}
        />
      </AppLayout>
    );
  }
}

export default App;
