import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { io } from 'socket.io-client';

import { Message, MessageProps } from '../Message';
import { MESSAGES_EXAMPLE } from '../../utils/messages';

import * as S from './styles';

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function featMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3');

      setCurrentMessages(messagesResponse.data);
    }

    featMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prevState) => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ]);
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.Container
      contentContainerStyle={S.styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </S.Container>
  );
}
