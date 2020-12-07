export const CREATE_CARD = 'CREATE_CARD'

export function createCard (newCard) {
  return {
    type: CREATE_CARD,
    newCard
  }
}
