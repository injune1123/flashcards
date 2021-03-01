import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckOfCards from './DeckOfCards'
import { receiveDecks } from '../actions/decks'
import { fetchDecksResults } from '../utils/api'
import { connect } from 'react-redux'

const Stack = createStackNavigator();

const DeckSummary = (deckInfo, navigation) => (
  <View 
    style={styles.card}
    key={deckInfo.title}
    >
      <Text>
        Deck Name: {deckInfo.title}
      </Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('DeckOfCards')}
      >
          <Text>View flashCards</Text>
      </TouchableOpacity>
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
    <View style={styles.container}>
        <Text>DECKS OF CARDS</Text>
        { Object.keys(this.props.decks).map((key)=>DeckSummary(this.props.decks[key], this.props.navigation))}
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
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  }
});


function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks);
