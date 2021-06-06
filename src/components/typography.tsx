import React, {FC} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {FontSize, FontWeight} from '../constants/design';

interface TypographyProps extends TextProps {
  fontWeight?: keyof typeof FontWeight;
  fontSize?: keyof typeof FontSize;
}

export const Typography: FC<TypographyProps> = props => (
  <Text
    {...props}
    style={{
      ...(props.style as TextStyle),
      ...(props?.fontWeight && {fontWeight: FontWeight?.[props?.fontWeight!]}),
      ...(props?.fontSize! && {fontSize: FontSize?.[props?.fontSize!]}),
    }}
  />
);
