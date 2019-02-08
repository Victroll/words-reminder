import React, { useState } from 'react';
import './utils/font-awesome/all';

/** API */
import { saveNewWord, getLastSavedWord } from './API';

/** Components */
import AppLayout from './components/app-layout/index';
import HomeButton from './components/home-button/index';
import HomeLastWord from './components/home-last-word';

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [lastWord, setLastWord] = useState(getLastSavedWord());

  const onToggleInputs = id => {
    switch (id) {
      case 'search':
        setShowSearch(!showSearch);
        setShowAdd(false);
        setShowEdit(false);
        break;
      case 'add':
        setShowSearch(false);
        setShowAdd(!showAdd);
        setShowEdit(false);
        break;
      case 'edit':
        setShowSearch(false);
        setShowAdd(false);
        setShowEdit(!showEdit);
        break;
    }
  };

  const onAddHandler = input => {
    onToggleInputs('add');
    if (showAdd) {
      saveNewWord(input)
        .then(
          res => setLastWord(res)
        );
    }
  };

  return (
    <AppLayout>
      <HomeLastWord lastWord={lastWord} />
      <HomeButton
        icon='search'
        inputMode={showSearch}
        onClick={() => onToggleInputs('search')}
      />
      <HomeButton
        icon='add'
        inputMode={showAdd}
        onClick={onAddHandler}
      />
      <HomeButton
        icon='edit'
        inputMode={showEdit}
        onClick={() => onToggleInputs('edit')}
      />
    </AppLayout>
  );
};

export default App;
