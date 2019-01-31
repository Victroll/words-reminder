import React, { Component } from 'react';
import './utils/font-awesome/all';

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
      showEdit: false
    };
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

  render() {
    const { showSearch, showAdd, showEdit } = this.state;
    return (
      <AppLayout>
        <HomeLastWord />
        <HomeButton
          icon='search'
          inputMode={showSearch}
          onClick={() => this.onToggleInputs('search')}
        />
        <HomeButton
          icon='add'
          inputMode={showAdd}
          onClick={() => this.onToggleInputs('add')}
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
