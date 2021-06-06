import {ViewStyle, TextStyle, StyleProp} from 'react-native';

const Palette = {
  flame: '#E4572E',
  laserLemon: '#F0F66E',
  ivony: '#F0F8EA',
  olivine: '#A8C686',
  moss: '#9D9C62',
  white: '#ffffff',
};

const Spacing = {
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

const FontSize = {
  normal: 14,
  large: 18,
};

type FontWeights = 'thin' | 'normal' | 'bold';

const FontWeight: Record<FontWeights, TextStyle['fontWeight']> = {
  thin: '200',
  normal: 'normal',
  bold: 'bold',
};

const Styles: {[key: string]: StyleProp<ViewStyle | TextStyle>} = {
  button: {
    paddingVertical: Spacing.s,
    paddingHorizontal: Spacing.l,
    borderRadius: Spacing.s,
    backgroundColor: Palette.flame,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: FontWeight.bold,
    fontSize: FontSize.large,
    color: Palette.white,
  },
};

export const theme = {
  colors: {
    background: Palette.ivony,
    primary: Palette.flame,
    secondary: Palette.olivine,
  },
  spacing: Spacing,
  styles: Styles,
};
