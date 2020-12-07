import { CREATE_DECK } from '../actions/decks'


export default function decks (state = {}, action) {
  switch(action.type) {

  case CREATE_DECK:

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
