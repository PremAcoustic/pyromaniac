import { writable } from 'svelte/store';

const quote = writable(getLocalStorageQuote(), set => {
  const unsubscribe = set(getLocalStorageQuote());
  return () => unsubscribe();
});

quote.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('quote', JSON.stringify(value));
  }
});

function getLocalStorageQuote() {
  if (typeof window !== 'undefined') {
    const quoteFromStorage = localStorage.getItem('quote');
    return quoteFromStorage ? JSON.parse(quoteFromStorage) : [];
  }
  return [];
}

export default quote;