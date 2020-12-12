import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { receiveDecks } from '../actions/decks'
import { fetchDecksResults } from '../utils/api'
import { connect } from 'react-redux'

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
      <Text>
      hiii decks in store: {
      JSON.stringify(this.props.decks)
      }</Text>
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
  }
});


function mapStateToProps({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks);
