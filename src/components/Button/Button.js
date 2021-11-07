import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 20px 0 20px 5px;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '15px 50px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.l)};
  background-color: ${({ theme, colored }) => (colored ? theme.colors.white : theme.colors.whiteGrey)};
  border-radius: 30px;
  border: 3px ${({ theme, colored }) => (colored ? theme.colors.strongTurq : theme.colors.white)} solid;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme, colored }) => (colored ? theme.colors.strongTurq : theme.colors.strongTurq)};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.s : fontSize.m)};
    padding: ${({ isBig }) => (isBig ? '10px 38px' : '10px 20px')};
  }
`;
