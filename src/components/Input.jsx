import React from 'react';
import styled, { withTheme } from 'styled-components';

const Label = styled.label`
  color: ${({ theme }) => theme.palette.primary.extraLight};
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const InputText = styled.input`
  color: ${({ theme }) => theme.palette.grey[400]};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border: 0.6px solid ${({ theme }) => theme.palette.grey[400]};
  padding: 7px;
  transition: 1s;
  font-size: 16px;
  width: -webkit-fill-available;
  &:focus {
    outline-color: ${({ theme }) => theme.palette.primary.extraLight};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin: 15px 0px;
`;

export default withTheme(
  React.forwardRef(({ label, name }, ref) => (
    <InputWrapper>
      <Label>{label}</Label>
      <InputText ref={ref} name={name} />
    </InputWrapper>
  )),
);
