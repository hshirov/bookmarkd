import React from 'react';
import { ReturnKeyTypeOptions, StyleProp, TextInput, TextStyle } from 'react-native';
import useTheme from 'hooks/useTheme';
import Theme from 'enums/Theme.enum';

interface InputProps {
  value: string;
  autoCorrect?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  style?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  // eslint-disable-next-line
  ref?: React.Ref<TextInput>;
}

const Input: React.FC<InputProps> = React.forwardRef<TextInput, InputProps>(
  ({ value, autoCorrect = false, returnKeyType = 'default', style, onChangeText }, ref) => {
    const { theme, colors, spacing, sizing } = useTheme();

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
        keyboardAppearance={theme === Theme.Dark ? 'dark' : 'light'}
        returnKeyType={returnKeyType}
        autoCorrect={autoCorrect}
        value={value}
        ref={ref}
        onChangeText={onChangeText}
      />
    );
  }
);

export default Input;
