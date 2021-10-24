import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { COLORS } from '../../theme/colors';

import { Button } from '../Button';

import * as S from './styles';

export function SingInBox() {
  const { singIn, isSinging } = useAuth();

  return (
    <S.Container>
      <Button
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={singIn}
        isLoading={isSinging}
      />
    </S.Container>
  );
}
