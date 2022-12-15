import { StyleProp, TextInput, TextStyle } from 'react-native';
import useTheme from 'hooks/useTheme';

interface InputProps {
  value: string;
  style?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ value, style, onChangeText }) => {
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
      onChangeText={onChangeText}
    />
  );
};

export default Input;
