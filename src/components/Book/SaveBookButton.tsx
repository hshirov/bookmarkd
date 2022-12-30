import { useCallback, useMemo, useState } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import BookStatus from 'enums/BookStatus.enum';
import useTheme from 'hooks/useTheme';
import { useAppSelector } from 'hooks/store';
import { Text, Popup, Menu } from '../Base';

interface SaveBookButtonProps {
  bookId: string;
  saveBook: (status: BookStatus) => void;
  removeBook: () => void;
  style?: StyleProp<ViewStyle>;
}

const SaveBookButton: React.FC<SaveBookButtonProps> = ({ bookId, saveBook, removeBook, style }) => {
  const { colors, sizing, fonts, styles } = useTheme();
  const [isPopupActive, setIsPopupActive] = useState(false);
  const savedBook = useAppSelector((state) => state.books.saved[bookId]);

  const openPopup = () => setIsPopupActive(true);
  const closePopup = () => setIsPopupActive(false);

  const onSelectItem = (status: BookStatus) => {
    if (savedBook && savedBook.status === status) {
      removeBook();
    } else {
      saveBook(status);
    }
    closePopup();
  };

  const generateCircleIcon = useCallback(
    (status: BookStatus) => (
      <Octicons
        name={savedBook && status === savedBook.status ? 'check-circle-fill' : 'circle'}
        size={sizing.iconLarge}
        color={colors.text}
      />
    ),
    [savedBook, sizing, colors]
  );

  const savedBookText = useMemo(() => {
    if (!savedBook) return undefined;

    switch (savedBook.status) {
      case BookStatus.WantToRead:
        return 'You want to read this book.';
      case BookStatus.Reading:
        return 'You are reading this book.';
      case BookStatus.Finished:
        return 'You have finished this book.';
      default:
        return undefined;
    }
  }, [savedBook]);

  return (
    <>
      <View style={style}>
        {savedBook ? (
          <Pressable onPress={openPopup}>
            <Text.Secondary>
              {savedBookText}
              <Text.Paragraph style={{ fontFamily: fonts.openSansBold }}> Change</Text.Paragraph>
            </Text.Secondary>
          </Pressable>
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <Pressable style={styles.pressedOpacity} onPress={() => onSelectItem(BookStatus.WantToRead)}>
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
            </Pressable>

            <Pressable style={styles.pressedOpacity} onPress={openPopup}>
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
        )}
      </View>

      <Popup isActive={isPopupActive} onTapOutside={closePopup}>
        <Menu>
          <Menu.Item
            text="Want to read"
            icon={generateCircleIcon(BookStatus.WantToRead)}
            onPress={() => onSelectItem(BookStatus.WantToRead)}
          />
          <Menu.Item
            text="Reading"
            icon={generateCircleIcon(BookStatus.Reading)}
            onPress={() => onSelectItem(BookStatus.Reading)}
          />
          <Menu.Item
            text="Finished"
            icon={generateCircleIcon(BookStatus.Finished)}
            onPress={() => onSelectItem(BookStatus.Finished)}
          />
        </Menu>
      </Popup>
    </>
  );
};

export default SaveBookButton;
