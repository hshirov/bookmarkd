import { View } from 'react-native';
import useTheme from 'hooks/useTheme';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { colors, spacing } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.innerPadding,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
