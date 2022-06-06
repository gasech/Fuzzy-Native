import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Task from '../components/Task';

export default function TasksScreen() {
  const [task, setTask] = useState('')

  const [tasks, setTasks] = useState([
    {
      task_name: "ASDSADSADAS",
      key: 0,
    },
  ]);

  const createTask = (task_name) => {
    console.log("Task created! " + task_name);
    const newTask = {task_name: task_name, key: tasks.length}
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  return (
    <View style={styles.mainPage}>
      <StatusBar style="auto" />
      <Text style={styles.mainTitle}>Tasks</Text>
      <TextInput placeholder={"Task Name"} value={task} onChange={setTask}></TextInput>
      <Button ButtonText={"Create Task"} onPress={() => createTask(task)} />
      {
        
        tasks.map((task, index) => {
          return (
            <Task key={task.key} name={task.task_name} />
          );
        })
        
      }
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1c1c1e',
  },
  mainTitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: '50px',
  },
  text: {
    marginTop: '25px',
    textAlign: 'center',
    color: 'white',
  }
});