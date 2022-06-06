import * as React from 'react';
import styled from 'styled-components/native'

import icon from '../../assets/favicon.png';

export default function Logo() {
  return (
    <StyledCenter>
      <StyledLogo source={icon} />
      <StyledTitle>Fuzzy Native</StyledTitle>
    </StyledCenter>
  );
}

const StyledCenter = styled.View`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
`;

const StyledLogo = styled.Image`
  margin-top: 6px;
  margin-left: 23%;
  height: 40px;
  width: 40px;
`;

const StyledTitle = styled.Text`
  font-size: 18px;
  margin-top: 2px;
  margin-left: 5px;
  color: white;
`;
