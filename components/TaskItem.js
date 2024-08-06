import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const TaskContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TaskText = styled(Text)`
  flex: 1;
  font-size: 16px;
  ${({ completed }) => completed && `text-decoration: line-through; color: #aaa;`}
`;

const RemoveButton = styled(TouchableOpacity)`
  padding: 0 5px;
  background-color: #ff4d4d;
  border-radius: 5px;
`;

const RemoveButtonText = styled(Text)`
  color: white;
  font-weight: bold;
`;

const TaskItem = ({ item, toggleTask, removeTask }) => (
  <TaskContainer>
    <TouchableOpacity onPress={() => toggleTask(item.id)}>
      <TaskText completed={item.completed}>{item.text}</TaskText>
    </TouchableOpacity>
    <RemoveButton onPress={() => removeTask(item.id)}>
      <RemoveButtonText>X</RemoveButtonText>
    </RemoveButton>
  </TaskContainer>
);

export default TaskItem;