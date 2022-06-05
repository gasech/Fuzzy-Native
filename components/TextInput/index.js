import * as React from 'react';
import styled from 'styled-components/native'

export default function TextInput({ PlaceHolder }) {
  return (
    <StyledTextInput
      placeholder={PlaceHolder}
      keyboardType="numeric"
    />
  );
}

const StyledTextInput = styled.TextInput`
  padding-left: 5px;
  padding-top: 5px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 10px;
  height: 40px;
  width: 70%;
  color: white;
`;
