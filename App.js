import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, ImageBackground } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';




export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHendler = goalTitle => {
    setCourseGoals(currentGoals => 
      [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
      setIsAddMode(false);
  };
  
  const removeGoalHendler = goalId =>
  {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId );
    })

  }

  const cancelButton = () => {
    setIsAddMode(false)
  };
  return (

    <View style={styles.screen}>
      
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} color='#0069cc'/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHendler} cancle={cancelButton}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHendler} title={itemData.item.value}/>} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#e6f3ff',
    
    
  }
  
});
