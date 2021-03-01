import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { submitDeck } from '../utils/deck'

import { addDeck } from '../actions/decks';
import { connect } from 'react-redux'

class AddDeck extends Component {
  constructor (props){
    super(props)
    this.state = {
      title: '',
    }
  }

  setDeckTitle = (title) => {
    this.setState((state)=>{
      return {
        ...state,
        title
      }
    })
  }
  submit = () => {

    // use deck title as the key
    const key = this.state.title
    const deck = this.state

    // add it to the store
    this.props.dispatch(addDeck({
      [key]: deck
    }))

    this.setState(() => ({
      title: '',
    }))

    submitDeck({ key: key, deck }).then(
      ()=>{
        this.props.navigation.navigate('Decks')   
      }
    )
  }
  render() {

  return (
    <View style={styles.container}>
      <Text>What's the name of your new Deck?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setDeckTitle(text)}
        value={this.state.deckTitle}
      />
      <TouchableOpacity
        style={styles.button}
        disabled={!this.state.title}
        onPress={this.submit}
      >
        <Text>Create</Text>
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
  }
});


function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(AddDeck);
