import styled, { css } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const ButtonWrapper = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const Icon = styled(AntDesign)`
  margin-right: 12px;
`;
