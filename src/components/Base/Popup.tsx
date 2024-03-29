import { Modal, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from 'hooks/useTheme';

interface PopupProps {
  children: React.ReactNode;
  isActive: boolean;
  onTapOutside: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, isActive, onTapOutside }) => {
  const { colors, sizing, spacing, styles } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={isActive} animationType="slide" transparent>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Pressable style={{ flex: 1 }} onPress={onTapOutside} />
        <View
          style={[
            {
              backgroundColor: colors.popupBackgroundColor,
              minHeight: sizing.popupMinHeight,
              paddingHorizontal: spacing.spacer,
              paddingTop: spacing.spacer,
              paddingBottom: insets.bottom,
            },
            styles.shadow,
          ]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
