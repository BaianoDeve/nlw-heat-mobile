import React from 'react';

import { useAuth } from '../../contexts/AuthContext';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SingInBox } from '../../components/SingInBox';

import * as S from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <S.Container>
      <Header />
      <MessageList />

      {user ? <SendMessageForm /> : <SingInBox />}
    </S.Container>
  );
}
