import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({onAddGoal, isModalActive, cancelAddingGoal}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const buttonActionAdd=()=>{
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  const buttonActionCancel=()=>{
    cancelAddingGoal();
    setEnteredGoal('');
  }

  return (
    <Modal visible={isModalActive} animationType='fade'>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonWidth} title="Add" onPress={buttonActionAdd}/>
      <Button style={styles.buttonWidth} title="Cancel" onPress={buttonActionCancel} color='pink' />
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    marginBottom:10
  },
  buttonContainer:{
    width:'70%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonWidth:{
    width:'30%'
  }
});

export default GoalInput;
