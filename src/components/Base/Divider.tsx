import { View } from 'react-native';
import useTheme from 'hooks/useTheme';

const Divider: React.FC = () => {
  const { spacing, sizing, colors } = useTheme();

  return (
    <View
      style={{
        borderBottomColor: colors.textInactive,
        borderBottomWidth: sizing.borderWidth,
        marginVertical: spacing.spacer,
      }}
    />
  );
};

export default Divider;
