import { lightThemeColors, darkThemeColors } from 'styles/colors';
import spacing from 'styles/spacing';
import sizing from 'styles/sizing';
import fonts from 'styles/fonts';
import styles from 'styles/styles';
import Theme from 'enums/Theme.enum';
import { useAppSelector } from './store';

const useTheme = () => {
  const { theme } = useAppSelector((state) => state.common);

  const colors = theme === Theme.Dark ? darkThemeColors : lightThemeColors;

  return {
    theme,
    colors,
    spacing,
    sizing,
    fonts,
    styles,
  };
};

export default useTheme;
