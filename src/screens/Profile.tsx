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
import { SavedBooksList } from 'components/Book';

const Profile: React.FC<TabNavProps<TabRoute.Profile>> = ({ navigation }) => {
  const { sizing, spacing, colors } = useTheme();
  const { saved: savedBooks } = useAppSelector((state) => state.books);

  const toReadBooks = getSavedBooksByStatus(savedBooks, BookStatus.WantToRead);
  const readingBooks = getSavedBooksByStatus(savedBooks, BookStatus.Reading);
  const finishedBooks = getSavedBooksByStatus(savedBooks, BookStatus.Finished);

  const hasToReadBooks = isNonEmptyArr(toReadBooks);
  const hasReadingBooks = isNonEmptyArr(readingBooks);
  const hasFinishedBooks = isNonEmptyArr(finishedBooks);
  const hasNoBooks = !hasToReadBooks && !hasReadingBooks && !hasFinishedBooks;

  const renderMenu = () => (
    <Menu>
      <Menu.Divider />
      <Menu.Item
        text="Settings"
        icon={<Entypo name="cog" size={sizing.iconLarge} color={colors.text} />}
        onPress={() => navigation.navigate(TabRoute.Settings)}
      />
    </Menu>
  );

  if (hasNoBooks) {
    return (
      <Container style={{ justifyContent: 'space-between', paddingBottom: spacing.spacer / 2 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text.Paragraph>You will see your saved books here.</Text.Paragraph>
        </View>

        {renderMenu()}
      </Container>
    );
  }

  return (
    <ScrollableContainer style={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <View>
        {hasToReadBooks && (
          <SavedBooksList title="Want to read" books={toReadBooks} style={{ marginBottom: spacing.spacer }} />
        )}
        {hasReadingBooks && (
          <SavedBooksList title="Reading" books={readingBooks} style={{ marginBottom: spacing.spacer }} />
        )}
        {hasFinishedBooks && <SavedBooksList title="Finished" books={finishedBooks} />}
      </View>

      {renderMenu()}
    </ScrollableContainer>
  );
};

export default Profile;
