import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const DescriptionText = styled(Text)`
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
  text-align: center;
`;

const Description = ({ text }) => <DescriptionText>{text}</DescriptionText>;

export default Description;
