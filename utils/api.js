import AsyncStorage from '@react-native-async-storage/async-storage'
import { DECKS_STORAGE_KEY} from './deck'

export function fetchDecksResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}
