import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem=({title,onDelete,id})=>{
    return(
        <TouchableOpacity onPress={onDelete.bind(this,id)}><View style={styles.listStyle}>
        <Text>{title}</Text>
      </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listStyle:{
        padding:10,
        backgroundColor:'#ddd',
        borderColor:'green',
        borderWidth:1
      }
  });
  
  export default GoalItem;