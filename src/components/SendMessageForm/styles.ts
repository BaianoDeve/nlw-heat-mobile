import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 184px;
    background-color: ${theme.COLORS.BLACK_TERTIARY};
    padding: 16px 24px ${getBottomSpace() + 16}px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    height: 88px;
    text-align-vertical: top;
    color: ${theme.COLORS.WHITE};
  `}
`;
