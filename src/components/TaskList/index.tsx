import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ITask, useTaskList} from '../../context/TasksContext';

/*
interface Task {
  id: string;
  title: string;
}

//é a tipagem que o componente vai receber
interface TaskListProps {
  tasks: Task[];
}
Antes tinha a tipagem:
TaskList = ({tasks}: TaskListProps) => Não preciso mais, pois agora pego via Context
*/

export const TaskList = () => {
  //Essa informação é global, pego ela de context/TaskContext
  const tasks = useTaskList();

  return (
    <FlatList
      /*se eu colocar só tasks, fica ando erro. Tenho que forçar uma tipagem. No caso usei o unknow. Forcei o unknow tbm falando que é do tipo ITasksContext[]
      data={tasks as unknown as ITasksContext[]} */
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity key={item.id} style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
