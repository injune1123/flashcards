import AsyncStorage from '@react-native-async-storage/async-storage'

export const DECKS_STORAGE_KEY = 'UdaciFitness:deck'

export const getDeck = (deckId) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
      return JSON.parse(results)[deckId]
    })
  }

export function submitCard ({deckId , card}) {
  // the 'UdaciFitness:deck' item will have a property of key
  // whose value is 
  // {deck: deck, cards: {question1:{question1: answer1}, ...}
  // first get the deck for cards

  getDeck(deckId).then((questions) => {
    return AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [deckId]: { 
                ...questions,
                cards: {
                    ...(questions[card] || []), 
                    [card.question]: card
                }
            },
        }),
      )
  })
}  



