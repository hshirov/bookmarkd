import { useMemo, useState } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import useTheme from 'hooks/useTheme';
import { Text, Popup, Menu } from '../Base';

interface AddToListButtonProps {
  style?: StyleProp<ViewStyle>;
}

const AddToListButton: React.FC<AddToListButtonProps> = ({ style }) => {
  const { colors, sizing } = useTheme();
  const [isPopupActive, setIsPopup] = useState(false);

  const closeModal = () => setIsPopup(false);

  const CircleIcon = useMemo(
    () => <Octicons name="circle" size={sizing.iconLarge} color={colors.text} />,
    [sizing, colors]
  );

  return (
    <>
      <View style={[{ flexDirection: 'row' }, style]}>
        <View
          style={{
            width: sizing.addToListButtonWidth,
            height: sizing.addToListButtonHeight,
            backgroundColor: colors.addToListButtonBackgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: sizing.borderWidth,
          }}
        >
          <Text.Paragraph style={{ color: colors.textInverse }}>Want to read</Text.Paragraph>
        </View>

        <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })} onPress={() => setIsPopup(true)}>
          <View
            style={{
              width: sizing.addToListButtonHeight,
              height: sizing.addToListButtonHeight,
              backgroundColor: colors.addToListButtonBackgroundColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Octicons name="chevron-down" size={sizing.iconLarge} color={colors.textInverse} />
          </View>
        </Pressable>
      </View>

      <Popup isActive={isPopupActive} onTapOutside={closeModal}>
        <Menu>
          <Menu.Item text="Want to read" icon={CircleIcon} onPress={closeModal} />
          <Menu.Item text="Reading" icon={CircleIcon} onPress={closeModal} />
          <Menu.Item text="Finished" icon={CircleIcon} onPress={closeModal} />
        </Menu>
      </Popup>
    </>
  );
};

export default AddToListButton;
