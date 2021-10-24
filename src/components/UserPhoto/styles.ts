import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  ${({ theme }) => css`
    border-width: 4px;
    border-color: ${theme.COLORS.BLACK_SECONDARY};
  `}
`;
