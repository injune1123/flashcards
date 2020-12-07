import { CREATE_CARD } from '../actions/cards'


export default function decks (state = {}, action) {
  switch(action.type) {

    // whenever a card is created
    // also add it to its deck
    case CREATE_CARD:
      const {newCard} = action
      return {
        ...state,
        [state[newCard.deck].id]: {
          ...state[newCard.deck],
          cards: [...state[newCard.deck].cards, newCard.id]
        }
      }

    default:
      return state
  }
}
