import AsyncStorage from '@react-native-async-storage/async-storage'

export const DECKS_STORAGE_KEY = 'UdaciFitness:deck'

export function submitDeck ({key , deck}) {
  // the 'UdaciFitness:deck' item will have a property of key
  // whose value is 
  // {deck: deck, cards: {question1:{question1: answer1}, ...}
  console.log("AsyncStorage", AsyncStorage.getAllKeys())
  console.log("key", key)
  console.log("deck", deck)
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }), 
  () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
      console.log('err', err);

      console.log('res', result);
    });
  }
  )


  
}
