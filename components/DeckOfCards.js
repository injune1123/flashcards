import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { receiveDecks } from '../actions/decks'
import { fetchDecksResults } from '../utils/api'
import { connect } from 'react-redux'

const CardSummary = (cardInfo) => (
  <View 
    style={styles.card}
    key={cardInfo.question}
    >
      <Text>
        Question: {cardInfo.question}
      </Text>
      <TouchableOpacity>
          <Text>View Answer</Text>
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
    <View>
        <Text>ALL CARDS</Text>
        { this.props.decks["hi"] && Object.keys(this.props.decks["hi"].cards).map((key)=>CardSummary(this.props.decks["hi"].cards[key]))}
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
