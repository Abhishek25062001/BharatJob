import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';

interface TextProps extends RNTextProps {
  variant?: keyof typeof typography;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = colors.dark,
  align = 'left',
  style,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        { ...typography[variant], fontWeight: undefined },
        { color, textAlign: align, fontWeight: typography[variant].fontWeight as any },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
