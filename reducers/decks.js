import { ADD_DECK, RECEIVE_DECKS } from '../actions/decks'


export default function decks (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case ADD_DECK:
      return {
        ...state,
        [action.newDeck.id]: action.newDeck
      }

    // delete

    // modify

    default:
      return state

  }


}
