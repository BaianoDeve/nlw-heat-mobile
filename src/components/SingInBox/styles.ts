import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 20px ${getBottomSpace() + 32}px;
`;
