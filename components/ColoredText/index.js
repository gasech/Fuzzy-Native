import * as React from 'react';
import styled from 'styled-components/native'

export default function ColoredText({ children, color }) {
  return (
    <StyledText style={{color: {color}}}>{children}</StyledText>
  );
}

const StyledText = styled.Text`
  font-weight: bold;
`;
