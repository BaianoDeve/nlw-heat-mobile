import React from 'react';
import { Image } from 'react-native';

import avatarImg from '../../assets/avatar.png';
import { COLORS } from '../../theme/colors';

import * as S from './styles';

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  sizes?: 'SMALL' | 'NORMAL';
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: Props) {
  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <S.Container
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={{
        width: containerSize,
        height: containerSize,
        borderRadius: containerSize / 2,
      }}
    >
      <S.Avatar
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        }}
      />
    </S.Container>
  );
}
