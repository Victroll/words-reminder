const wrDB = indexedDB.open('wrDB', 1, upgradeDb => {
    if (!upgradeDb.objectStoreNames.contains('words')) {
      const wordsOS = upgradeDb.createObjectStore('words', {
        keyPath: 'word',
        autoIncrement: false
      });
      wordsOS.createIndex('word', 'word', { unique: true });
    }
  });

wrDB.addWord = (word, translations) => {
  const newItem = {
    word,
    translations,
    best: 0
  };
  wrDB
    .result
    .transaction('words', 'readwrite')
    .objectStore('words')
    .add(newItem);
};

wrDB.getWord = () =>
  wrDB
    .result
    .transaction('words', 'readonly')
    .objectStore('words')
    .index('word')
    .get(1);

export default wrDB;
