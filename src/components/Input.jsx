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

const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error};
`;

export default withTheme(
  React.forwardRef(({ label, name, errors, type }, ref) => {
    const error = errors[name];
    const errorMessage = error ? error.message || error.type : null;
    return (
      <InputWrapper>
        <Label>{label}</Label>
        <InputText ref={ref} name={name} type={type ?? 'text'} />
        {errorMessage && <Error>{errorMessage}</Error>}
      </InputWrapper>
    );
  }),
);
