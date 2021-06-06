import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';

interface TypographyProps extends TextProps {}

export const Typography: FC<TypographyProps> = props => <Text {...props} />;
