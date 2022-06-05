import * as React from 'react';
import styled from 'styled-components/native'

import {Text} from 'react-native';

export default function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  font-weight: 400;
  margin: 5%;
  width: 90%;
  height: 25%;
  border-radius: 5px;
  background-color: #2C2C2E80;
`;
