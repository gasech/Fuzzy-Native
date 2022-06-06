import * as React from 'react';
import styled from 'styled-components/native';

export default function TextInput(props) {
  const {value, onChange} = props;
  
  return (
    <StyledTextInput
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      autoCorrect ={false}
      keyboardType="numeric"
      onChangeText={text => onChange(text)}
      value={value}
    />
  );
}

const StyledTextInput = styled.TextInput`
  padding-left: 5px;
  padding-top: 5px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #2C2C2E80;
  border-radius: 10px;
  height: 40px;
  width: 70%;
  color: grey;
`;
