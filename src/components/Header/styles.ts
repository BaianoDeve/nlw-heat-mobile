import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const LogoutButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoutText = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.WHITE};
    margin-right: 20px;
  `}
`;
