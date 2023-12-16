// indexedDB.js

const DB_NAME = 'wimbo';
const STORE_NAME = 'wimbo_store';

// Open the IndexedDB database
const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

// Store audio data in IndexedDB
const storeAudioData = (id, data) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put({ id, data });

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
};

// Retrieve audio data from IndexedDB
const getAudioData = (id) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);

      request.onsuccess = (event) => {
        const result = event.target.result;
        if (result) {
          resolve(result.data);
        } else {
          reject(new Error('Audio data not found in IndexedDB'));
        }
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  });
};

export { storeAudioData, getAudioData };
