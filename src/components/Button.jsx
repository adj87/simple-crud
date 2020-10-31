/* eslint-disable indent */
import styled from 'styled-components';

export default styled.button`
  width: 100%;
  padding: 5px;
  text-align: center;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  text-transform: uppercase;
  color: white;
  padding: 10px 0px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.extraLight;

      case 'secondary':
        return theme.palette.secondary.dark;

      default:
        return theme.palette.primary.extraLight;
    }
  }};
  &:hover {
    background-color: ${({ theme, color }) => {
      switch (color) {
        case 'primary':
          return theme.palette.primary.main;

        case 'secondary':
          return theme.palette.secondary.main;

        default:
          return theme.palette.primary.main;
      }
    }};
  }
`;
