import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {Typography} from './typography';
import {useTheme} from '../context/theme';

interface ButtonProps extends TouchableOpacityProps {}

export const Button: FC<ButtonProps> = props => {
  const {children, ...rest} = props;
  const {theme} = useTheme();

  return (
    <TouchableOpacity {...rest} style={theme.styles.button}>
      <Typography style={theme.styles.buttonText}>{children}</Typography>
    </TouchableOpacity>
  );
};
