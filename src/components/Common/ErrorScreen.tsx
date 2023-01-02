import useTheme from 'hooks/useTheme';
import { Button, Centered, Text } from '../Base';

interface ErrorScreenProps {
  hasTryAgainButton?: boolean;
  onPressTryAgain?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ hasTryAgainButton = false, onPressTryAgain }) => {
  const { spacing } = useTheme();

  return (
    <Centered>
      <Text.Title style={{ textAlign: 'center', marginBottom: spacing.spacer }}>Something went wrong.</Text.Title>

      <Text.Paragraph style={{ textAlign: 'center' }}>
        Please check your internet connection and try again.
      </Text.Paragraph>

      {hasTryAgainButton && (
        <Button text="Try Again" onPress={onPressTryAgain as () => void} style={{ marginTop: spacing.spacer }} />
      )}
    </Centered>
  );
};

export default ErrorScreen;
