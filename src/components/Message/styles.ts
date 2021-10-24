import styled, { css } from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled(MotiView)`
  width: 100%;
  margin-bottom: 36px;
`;

export const MessageText = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.WHITE};
    line-height: 20px;
    margin-bottom: 12px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.WHITE};
    margin-left: 16px;
  `}
`;
