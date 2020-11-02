import React from 'react';
import styled, { withTheme } from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  width: 800px;
  margin: auto;
  flex-direction: column;
  margin-top: 150px;
  animation: rollIn;
  animation-duration: 0.5s;
`;

const ListRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: ${({ bodyRow }) => (bodyRow ? 'pointer' : 'default')};
  &:hover {
    animation: ${({ bodyRow }) => bodyRow && 'pulse'};
    animation-duration: ${({ bodyRow }) => bodyRow && '0.5s'};
  }
`;

const ListItem = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${({ type, theme }) => {
    return type === 'header' ? theme.palette.secondary.dark : 'white';
  }};
  padding: 8px;
  color: ${({ type, theme }) => (type === 'header' ? theme.palette.secondary.light : '#d1d1d1')};

  border-bottom: ${({ theme }) => ` 0.5px solid ${theme.palette.secondary.light}`};
`;

const ListPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const PageNumber = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 100%;
  background-color: ${({ theme }) => ` ${theme.palette.secondary.dark}`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: white;
  border: ${({ theme }) => ` 2px solid ${theme.palette.secondary.light}`};
  font-family: RedHat Bold;
  cursor: pointer;
  font-size: 25px;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => ` ${theme.palette.primary.dark}`};
    background-color: ${({ theme }) => ` ${theme.palette.secondary.light}`};
    animation: heartBeat;
    animation-duration: 1s;
  }
`;
const List = ({ data, history }) => (
  <ListWrapper>
    <ListRowWrapper>
      <ListItem type="header">Name</ListItem>
      <ListItem type="header">First Name</ListItem>
    </ListRowWrapper>
    {data.length === 0 ? (
      <ListRowWrapper>
        {' '}
        <ListItem>No data to show</ListItem>
      </ListRowWrapper>
    ) : (
      data.map((el) => (
        <ListRowWrapper key={el.first_name} bodyRow onClick={() => history.push(`/edit/${el.id}`)}>
          <ListItem>{el.first_name}</ListItem>
          <ListItem>{el.last_name}</ListItem>
        </ListRowWrapper>
      ))
    )}
    <ListPagination>
      {[1, 2, 3].map((el) => (
        <PageNumber>{el}</PageNumber>
      ))}
    </ListPagination>
  </ListWrapper>
);

export default withTheme(List);
