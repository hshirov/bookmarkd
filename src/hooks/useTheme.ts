import colors from 'styles/colors/darkThemeColors';
import spacing from 'styles/spacing';
import sizing from 'styles/sizing';
import fonts from 'styles/fonts';
import Theme from 'enums/Theme.enum';

const useTheme = () => ({
  theme: Theme.Dark,
  colors,
  spacing,
  sizing,
  fonts,
});

export default useTheme;
