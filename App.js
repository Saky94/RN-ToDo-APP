import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Text, Image } from 'react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false)



  const addGoalHandler = goalTit => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value:goalTit}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.textEdit}>PLAN YOUR DAY...</Text>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => ( 
      <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
      
        
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
  textEdit: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10
  },
  imageTT: {

  }
});
