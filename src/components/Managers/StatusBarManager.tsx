import { StatusBar } from 'expo-status-bar';
import Theme from 'enums/Theme.enum';
import useTheme from 'hooks/useTheme';

const StatusBarManager: React.FC = () => {
  const { theme } = useTheme();

  return <StatusBar style={theme === Theme.Dark ? 'light' : 'dark'} />;
};

export default StatusBarManager;
