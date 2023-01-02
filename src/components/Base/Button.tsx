import { Pressable, StyleProp, ViewStyle } from 'react-native';
import useTheme from 'hooks/useTheme';
import Text from './Text';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  const { spacing, colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.text,
          paddingHorizontal: spacing.spacer,
          paddingVertical: spacing.spacer / 2,
        },
        style,
      ]}
    >
      <Text.Paragraph style={{ color: colors.textInverse }}>{text}</Text.Paragraph>
    </Pressable>
  );
};

export default Button;
