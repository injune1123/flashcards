import { combineReducers } from 'redux';

import { ADD_DECK, RECEIVE_DECKS } from '../actions/decks'
import { ADD_CARD } from '../actions/cards'

function decks (state = {}, action) {
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

    // whenever a card is created
    // also add it to its deck
  case ADD_CARD:
    const {newCard} = action

    console.log("!!!!!state", state)
    console.log("!!!!!newCard", newCard)
    console.log("!!!!![state[newCard.deck]]", [state[newCard.deck]])
    return {
      ...state,
      [newCard.deck]: {
        ...state[newCard.deck],
        // cards: [...state[newCard.deck].cards, newCard.card]
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  decks
})
