import { useMemo } from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import TabRoute from 'enums/TabRoute.enum';
import TabNavProps from 'types/navigation/TabNavProps.type';
import BookStatus from 'enums/BookStatus.enum';
import useTheme from 'hooks/useTheme';
import { useAppSelector } from 'hooks/store';
import { getSavedBooksByStatus } from 'utils/books';
import { isNonEmptyArr } from 'utils/index';
import { Container, Menu, ScrollableContainer, Text } from 'components/Base';
import { HorizontalBookList } from 'components/Book';

const Profile: React.FC<TabNavProps<TabRoute.Profile>> = ({ navigation }) => {
  const { sizing, spacing, colors } = useTheme();
  const { saved: savedBooks } = useAppSelector((state) => state.books);

  const toReadBooks = useMemo(() => getSavedBooksByStatus(savedBooks, BookStatus.WantToRead), [savedBooks]);
  const readingBooks = useMemo(() => getSavedBooksByStatus(savedBooks, BookStatus.Reading), [savedBooks]);
  const finishedBooks = useMemo(() => getSavedBooksByStatus(savedBooks, BookStatus.Finished), [savedBooks]);

  const hasToReadBooks = useMemo(() => isNonEmptyArr(toReadBooks), [toReadBooks]);
  const hasReadingBooks = useMemo(() => isNonEmptyArr(readingBooks), [readingBooks]);
  const hasFinishedBooks = useMemo(() => isNonEmptyArr(finishedBooks), [finishedBooks]);
  const hasNoBooks = useMemo(
    () => !hasToReadBooks && !hasReadingBooks && !hasFinishedBooks,
    [hasToReadBooks, hasReadingBooks, hasFinishedBooks]
  );

  const menu = useMemo(
    () => (
      <Menu>
        <Menu.Divider />
        <Menu.Item
          text="Settings"
          icon={<Entypo name="cog" size={sizing.iconLarge} color={colors.text} />}
          onPress={() => navigation.navigate(TabRoute.Settings)}
        />
      </Menu>
    ),
    [sizing, colors]
  );

  if (hasNoBooks) {
    return (
      <Container style={{ justifyContent: 'space-between', paddingBottom: spacing.spacer / 2 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text.Paragraph>You will see your saved books here.</Text.Paragraph>
        </View>

        {menu}
      </Container>
    );
  }

  return (
    <ScrollableContainer style={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <View>
        {hasToReadBooks && (
          <HorizontalBookList title="Want to read" books={toReadBooks} style={{ marginBottom: spacing.spacer }} />
        )}
        {hasReadingBooks && (
          <HorizontalBookList title="Reading" books={readingBooks} style={{ marginBottom: spacing.spacer }} />
        )}
        {hasFinishedBooks && <HorizontalBookList title="Finished" books={finishedBooks} />}
      </View>

      {menu}
    </ScrollableContainer>
  );
};

export default Profile;
