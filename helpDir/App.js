import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);
  const [id, setId]=useState('0');
  const GoalInputHandler = enteredText =>{
    setEnteredGoal(enteredText); 
  } 

  const addGoalHandler = ()=>{
    console.log(enteredGoal);
    console.log(courseGoals);
    setId(prevId=>(parseInt(prevId)+1).toString()); // kako da izbegnem prvi error posto posle sve lepo radi --RADI I JA RADIM
    setCourseGoals(prevGoals=>[...prevGoals,{id:id,value:enteredGoal}]);
    console.log(courseGoals);
  }
  const cancelAddingGoal=()=>{

  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={GoalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/* <View>
        {courseGoals.map((elem,index)=>{
          return <View key={index} style={styles.listStyle}><Text >{elem+index}</Text></View>;
        })}
      </View> */}
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals} renderItem={elem=>(
        <View style={styles.listStyle}>
        <Text>{elem.item.value+elem.item.id}</Text>
      </View>
      )}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10
  },
  listStyle:{
    padding:10,
    backgroundColor:'#ddd',
    borderColor:'green',
    borderWidth:1
  }
});
