import React from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';

const InputContainerWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 20px;
`;

const Input = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #fff;
`;

const Button = styled(TouchableOpacity)`
  background-color: #086c5c;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
`;

const InputContainer = ({ newTask, setNewTask, addTask }) => (
  <InputContainerWrapper>
    <Input
      placeholder="new task"
      placeholderTextColor="#aaa"
      value={newTask}
      onChangeText={setNewTask}
    />
    <Button onPress={addTask}>
      <ButtonText>Add</ButtonText>
    </Button>
  </InputContainerWrapper>
);

export default InputContainer;