/**
 * Vinícius da Silva Vieira
 * https://github.com/viniciusdasilvavieira
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

// Components
import styled           from 'styled-components/native';
import Header           from './components/Header';
import Description      from './components/Description';
import TaskInputForm    from './components/TaskInputForm';
import TaskItem         from './components/TaskItem';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f0f5;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 40px;
`;

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  // Task function
  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now().toString(), text: newTask, completed: false }]);
    setNewTask('');
  };

  // Toggle finished task
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Remove task function
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <TaskItem item={item} toggleTask={toggleTask} removeTask={removeTask} />
  );

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Description text="Tap an item to mark it as complete" />
        <TaskInputForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ContentContainer>
    </Container>
  );
}

export default App;