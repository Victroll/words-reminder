/**
 * This file should be removed and each function in the project, replaced
 * for API services
 */

import axios from 'axios';

const PRE = 'WordsReminder';
const LW = 'LastWord';
const DICT = 'Dictionary';

const getUrl = word =>
  `https://api.mymemory.translated.net/get?q=${word}&langpair=en|es`;

/**
 * Search the translation from english to spanish and save it.
 * @param {String} word Word to translate and save
 */
export const saveNewWord = word =>
  axios
    .get(getUrl(word))
    .then(({ data: { responseData: { translatedText: best }, matches } }) => {
      // Add to Last Word
      window.localStorage.setItem(
        `${PRE}-${LW}`,
        JSON.stringify({
          word
        })
      );
      // Add to dictionary
      let dictionary = JSON.parse(
        window.localStorage.getItem(`${PRE}-${DICT}`)
      );
      if (dictionary === null) {
        dictionary = {};
      }
      dictionary[word] = {
        best,
        translations: matches.map(match => match.translation)
      };
      window.localStorage.setItem(`${PRE}-${DICT}`, JSON.stringify(dictionary));
      return word;
    });

/**
 * Returns the last saved word. The format of the saved words is:
 * {
 *  text: translatedText
 * }
 */
export const getLastSavedWord = () => {
  const lastWord = JSON.parse(window.localStorage.getItem(`${PRE}-${LW}`));
  return lastWord ? lastWord.word : null;
};

/**
 * Search a word in the dictionary. If it doesm¡t exist,
 * translate it and save it
 * @param {String} word Word to look for in the dictionary
 */
export const searchWord = word => {
  const dictionary = JSON.parse(window.localStorage.getItem(`${PRE}-${DICT}`));
  if (dictionary === null || dictionary[word] === undefined) {
    return saveNewWord(word).then(res => res);
  }
  return new Promise(resolve => {
    resolve([word, dictionary[word].best]);
  });
};

/**
 * Retrieves all the stored words
 */
export const getAll = () => {
  const dictionary = JSON.parse(window.localStorage.getItem(`${PRE}-${DICT}`));
  if (dictionary === null) {
    return [];
  }
  return Object.keys(dictionary).map(w => ({
    word: w,
    best: dictionary[w].best,
    translations: dictionary[w].translations
  }));
};
