import * as React from 'react';
import styled from 'styled-components/native'
import { Image, View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export default function Task({name}) {
  return (
    <StyledTask>
      <TaskText>{name}</TaskText>
    </StyledTask>
  );
}

const StyledTask = styled.View`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #2C2C2E80;
  border-radius: 10px;
  height: 40px;
  width: 90%;
  color: grey;
`;

const TaskText = styled.Text`
  padding-top: 5px;
  padding-left: 15px;
  font-size: 20px;
  color: white;
`;
