import { TextInput } from 'react-native';
import useTheme from 'hooks/useTheme';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChangeText }) => {
  const { colors, spacing } = useTheme();

  return (
    <TextInput
      style={{
        height: spacing.spacer * 3,
        color: colors.text,
        borderBottomColor: colors.text,
        borderBottomWidth: 0.5,
      }}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
