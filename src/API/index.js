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
  axios.get(getUrl(word))
    .then(({ data: { responseData: { translatedText } }}) => {
      // Added to Last Word
      window.localStorage.setItem(
        `${PRE}-${LW}`,
        JSON.stringify({
          word,
          translatedWord: translatedText
        })
      );
      // Added to dictionary
      let dictionary = JSON.parse(
        window.localStorage.getItem(`${PRE}-${DICT}`)
      );
      if (dictionary === null) {
        dictionary = {};
      }
      dictionary[word] = translatedText;
      window.localStorage.setItem(
        `${PRE}-${DICT}`,
        JSON.stringify(dictionary)
      );
      return [word, translatedText];
    });

/**
 * Returns the last saved word. The format of the saved words is:
 * {
 *  text: translatedText
 * }
 */
export const getLastSavedWord = () => {
  let translations = JSON.parse(window.localStorage.getItem(`${PRE}-${LW}`));
  if (translations === null) {
    return [null];
  }
  return [translations.word, translations.translatedWord];
};
