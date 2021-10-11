import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal,Text } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const GoalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHendler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('');

  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>Please, enter your desired goal in the form below</Text>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={GoalInputHandler} value={enteredGoal} />
        <View style={styles.buttoncomp}>
          <View style={styles.oneButton}>
            <Button title="CANCEL" color="red" onPress={props.cancle} />
          </View>
          <View style={styles.oneButton}>
          <Button title="ADD" onPress={addGoalHendler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create(
  {
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     
    },
    input: {
      width: '80%',
      borderColor: 'blue',
      borderWidth: 1,
      padding: 10,
      marginBottom: 20,
      borderColor: 'silver'
    },
    buttoncomp:
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%'
    },
    oneButton:
    {
      width: '40%'
    },
    textStyle:
    {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom:30,
      textAlign: 'center'
    }
   
  
    
  });


export default GoalInput;