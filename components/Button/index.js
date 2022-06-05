import * as React from 'react';
import styled from 'styled-components/native'
import { Pressable } from 'react-native';

export default function Button({ ButtonText, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <StyledButton>
        {ButtonText}
      </StyledButton>
    </Pressable>
  );
}

const StyledButton = styled.View`
  padding-top: 10px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 70%;
  background-image: linear-gradient(90deg, rgba(19,182,228,1) 12%, rgba(123,49,187,1) 97%);  
  color: white;
`;
