import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

export const styles = StyleSheet.create({
  content: {
    paddingTop: 135,
    paddingBottom: 184,
  },
});

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;
