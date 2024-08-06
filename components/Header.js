import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled(View)`
  background-color: #086c5c;
  padding: 15px;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const HeaderText = styled(Text)`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderText>To-do List</HeaderText>
  </HeaderContainer>
);

export default Header;