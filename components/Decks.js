import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { receiveDecks } from '../actions/decks'
import { fetchDecksResults } from '../utils/api'
import { connect } from 'react-redux'

const DeckSummary = (deckInfo) => (
  <View 
    style={styles.card}
    key={deckInfo.title}
    >
      <Text>
        Deck Name: {deckInfo.title}
      </Text>
    </View>
)

class Decks extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    fetchDecksResults()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
  }

  render() {
  return (
    <View>
        <Text>DECKS OF CARDS</Text>
        { Object.keys(this.props.decks).map((key)=>DeckSummary(this.props.decks[key]))}
        <TouchableOpacity>
          <Text>Add A NEW DECK</Text>
        </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  card:{
    padding: 10,
    border: '1px solid black',
    margin: '10px'
  }
});


function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks);
