import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import useTheme from 'hooks/useTheme';

interface InputProps {
  value: string;
  style?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  // eslint-disable-next-line
  ref?: React.Ref<TextInput>;
}

const Input: React.FC<InputProps> = React.forwardRef<TextInput, InputProps>(({ value, style, onChangeText }, ref) => {
  const { colors, spacing, sizing } = useTheme();

  return (
    <TextInput
      style={[
        {
          height: spacing.spacer * 3,
          color: colors.text,
          borderBottomColor: colors.text,
          borderBottomWidth: sizing.borderWidth,
          fontSize: sizing.fontSmall,
        },
        style,
      ]}
      keyboardAppearance="dark"
      value={value}
      ref={ref}
      onChangeText={onChangeText}
    />
  );
});

export default Input;
