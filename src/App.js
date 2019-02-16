import React, { useState, useEffect } from 'react';
import './utils/font-awesome/all';

/** API */
import { saveNewWord, getLastSavedWord, searchWord } from './API';

/** Components */
import AppLayout from './components/app-layout/index';
import HomeButton from './components/home-button/index';
import HomeLastWord from './components/home-last-word';
import TranslationModal from './components/translation-modal';
import InfoDialog from './components/info-dialog';
import Loader from './components/loader/index';

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [lastWord, setLastWord] = useState([null]);
  const [showTranlation, setShowTranlation] = useState(true);
  const [searchedWord, setSearchedWord] = useState(['asd', 'qwe']);
  const [addedWord, setAddedWord] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLastWord(getLastSavedWord());
  }, []);

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
    if (showAdd && input !== '') {
      setIsLoading(true);
      saveNewWord(input)
        .then(
          res => {
            setIsLoading(false);
            setAddedWord(true);
            setLastWord(res);
          }
        );
    }
  };

  const onSearchHandler = input => {
    onToggleInputs('search');
    if (showSearch && input !== '') {
      setIsLoading(true);
      searchWord(input).then(pair => {
        setShowTranlation(true);
        setSearchedWord(pair);
        setIsLoading(false);
      });
    }
  };

  return (
    <AppLayout>
      <HomeLastWord lastWord={lastWord} />
      <HomeButton
        icon='search'
        inputMode={showSearch}
        onClick={onSearchHandler}
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
      {showTranlation && (
        <TranslationModal
          word={searchedWord[0]}
          translatedWord={searchedWord[1]}
          onClose={() => setShowTranlation(false)}
        />
      )}
      <InfoDialog isOpen={addedWord} onClose={() => setAddedWord(false)} />
      {isLoading && <Loader />}
    </AppLayout>
  );
};

export default App;
