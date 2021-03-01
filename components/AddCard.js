import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { submitCard } from '../utils/card'

import { addCard } from '../actions/cards';
import { connect } from 'react-redux'

class AddCard extends Component {
  constructor (props){
    super(props)
    this.state = {
        question: '',
        answer: '',
    }
  }

  setCardQuestion = (question) => {
    this.setState((state)=>{
      return {
        ...state,
        question
      }
    })
  }

  setCardAnswer = (answer) => {
    this.setState((state)=>{
      return {
        ...state,
        answer
      }
    })
  }
  submit = () => {

    // use deck title as the key
    const cardKey = this.state.question
    const card = this.state

    // add it to the store
    this.props.dispatch(addCard(
        { 
            deck: 'hi',
            card: {
                [cardKey]: card
                }
            }
    
    ))

    this.setState(() => ({
        question: '',
        answer: '',
    }))
    submitCard({deckId:'hi' , card})
  }
  render() {

  return (
    <View style={styles.container}>
      <Text>Add a question in the box below</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setCardQuestion(text)}
        value={this.state.question}
      />
      <Text>Add the answer in the box below</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setCardAnswer(text)}
        value={this.state.answer}
      />
      <TouchableOpacity
        style={styles.button}
        disabled={!this.state.question || !this.state.answer} 
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

export default connect(mapStateToProps)(AddCard);
