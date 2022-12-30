import { Modal, Pressable, View } from 'react-native';
import useTheme from 'hooks/useTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface PopupProps {
  children: React.ReactNode;
  isActive: boolean;
  onTapOutside: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, isActive, onTapOutside }) => {
  const { colors, sizing, spacing } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={isActive} animationType="slide" transparent>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Pressable style={{ flex: 1 }} onPress={onTapOutside}>
          <View />
        </Pressable>
        <View
          style={{
            backgroundColor: colors.popupBackgroundColor,
            minHeight: sizing.popupMinHeight,
            paddingHorizontal: spacing.spacer,
            paddingTop: spacing.spacer,
            paddingBottom: insets.bottom,
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
