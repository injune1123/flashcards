export const CREATE_DECK = 'CREATE_DECK'

export function createDeck (newDeck) {
  return {
    type: CREATE_DECK,
    newDeck
  }
}
