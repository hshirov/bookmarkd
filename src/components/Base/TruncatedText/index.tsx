import { useState } from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';
import useTheme from 'hooks/useTheme';
import Text from '../Text';

interface TruncatedTextProps {
  text: string;
  maxLength?: number;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength = 200, textStyle, containerStyle }) => {
  const { fonts } = useTheme();
  const [shouldTruncate, setShouldTruncate] = useState(true);

  return (
    <Pressable style={containerStyle} onPress={() => setShouldTruncate((value) => !value)}>
      {text.length > maxLength && shouldTruncate ? (
        <Text style={textStyle}>
          {`${text.substring(0, maxLength)}... `}
          <Text style={{ fontFamily: fonts.family.openSansBold }}>See more</Text>
        </Text>
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </Pressable>
  );
};

export default TruncatedText;
