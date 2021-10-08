import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals,setCourseGoals]=useState([]);
  const [id, setId]=useState('0');
  const [isModalActive,setIsModalActive]=useState(false);
  const addGoalHandler = (goalTitle)=>{
    console.log(courseGoals);
    setId(prevId=>(parseInt(prevId)+1).toString()); // kako da izbegnem prvi error posto posle sve lepo radi --RADI I JA RADIM
    setCourseGoals(prevGoals=>[...prevGoals,{id:id,value:goalTitle}]);
    console.log(courseGoals);
    setIsModalActive(false);
  }

  const onDelete=id=>{
    setCourseGoals(courseGoals.filter(elem=>elem.id!==id))
  }
  const cancelAddingGoal=()=>{
    setIsModalActive(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add goals here" onPress={()=>{setIsModalActive(true)}}/>
      <GoalInput onAddGoal={addGoalHandler} isModalActive={isModalActive} cancelAddingGoal={cancelAddingGoal}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={elem => <GoalItem title={elem.item.value+" "+elem.item.id} onDelete={onDelete} id={elem.item.id} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});


