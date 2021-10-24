import React from 'react';
import {
  ColorValue,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
};

export function Button({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <S.ButtonWrapper
      style={{ backgroundColor }}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          <S.Icon name={icon} size={24} />
          <S.Title style={{ color }}>{title}</S.Title>
        </>
      )}
    </S.ButtonWrapper>
  );
}
