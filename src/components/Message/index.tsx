import React from 'react';

import { UserPhoto } from '../UserPhoto';

import * as S from './styles';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
};

export function Message({ data: { text, user } }: Props) {
  return (
    <S.Container
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
    >
      <S.MessageText>{text}</S.MessageText>

      <S.Footer>
        <UserPhoto imageUri={user.avatar_url} sizes="SMALL" />
        <S.UserName>{user.name}</S.UserName>
      </S.Footer>
    </S.Container>
  );
}
