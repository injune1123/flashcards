import AsyncStorage from '@react-native-async-storage/async-storage'

export const DECKS_STORAGE_KEY = 'UdaciFitness:deck'

export function submitDeck ({key , deck}) {
  // the 'UdaciFitness:deck' item will have a property of key
  // whose value is deck
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}
