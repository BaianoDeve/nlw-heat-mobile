import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';
import { UserPhoto } from '../UserPhoto';

import LogoSvg from '../../assets/logo.svg';

export function Header() {
  const { user, singOut } = useAuth();

  return (
    <S.Container>
      <LogoSvg />

      <S.LogoutButton>
        {user && (
          <TouchableOpacity onPress={singOut}>
            <S.LogoutText>Sair</S.LogoutText>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatar_url} />
      </S.LogoutButton>
    </S.Container>
  );
}
