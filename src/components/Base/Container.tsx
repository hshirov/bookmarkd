import { StyleProp, View, ViewStyle } from 'react-native';
import useTheme from 'hooks/useTheme';

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  const { colors, spacing } = useTheme();

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: spacing.innerPadding,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
