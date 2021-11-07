import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
const StyledLabel = styled.label`
  position: absolute;
  top: -25px;
  left: 15px;
  transform: translateY(40px);
  color: #bfbfbf;
  font-size: 20px;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  outline-color: ${({ theme }) => theme.colors.strongTurq};
  background-color: ${({ theme }) => theme.colors.whiteGrey};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  &:valid + ${StyledLabel}, &:focus + ${StyledLabel} {
    transform: translateY(0);
    color: ${({ theme }) => theme.colors.strongTurq};
    font-size: 14px;
    font-weight: 700;
  }
`;

const FloatingLabelInput = ({ id, type, placeholder, label }) => {
  return (
    <Wrapper>
      <StyledInput id={id} type={type} placeholder={placeholder} required />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </Wrapper>
  );
};

export default FloatingLabelInput;
