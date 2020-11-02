/* eslint-disable indent */
import styled from 'styled-components';

export default styled.button`
  width: 100%;
  padding: 5px;
  text-align: center;
  border: ${({ theme, color, inverse }) => (inverse ? `1px solid ${color === 'secondary' ? theme.palette.secondary.dark : theme.palette.primary.extraLight}` : 'none')}};
  font-size: 16px;
  border-radius: 5px;
  text-transform: uppercase;
  color: ${({ theme, color, inverse }) => {
    switch (color) {
      case 'primary':
        return inverse ? theme.palette.primary.extraLight : 'white';

      case 'secondary':
        return inverse ? theme.palette.secondary.dark : 'white';

      default:
        return inverse ? theme.palette.primary.extraLight : 'white';
    }
  }};
  padding: 10px 0px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({ theme, color, inverse }) => {
    switch (color) {
      case 'primary':
        return inverse ? 'white' : theme.palette.primary.extraLight;

      case 'secondary':
        return inverse ? 'white' : theme.palette.secondary.dark;

      default:
        return inverse ? 'white' : theme.palette.primary.extraLight;
    }
  }};
  &:hover {
    background-color: ${({ theme, color, inverse }) => {
      switch (color) {
        case 'primary':
          return inverse ? theme.palette.primary.contrastText : theme.palette.primary.main;

        case 'secondary':
          return theme.palette.secondary.main;

        default:
          return inverse ? theme.palette.primary.contrastText : theme.palette.primary.main;
      }
    }};
  }
`;
