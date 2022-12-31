import BookStatus from 'enums/BookStatus.enum';
import Dictionary from 'interfaces/dictionary.interface';
import SavedBook from 'interfaces/savedBook.interface';
import BookCategory from 'enums/BookCategory.enum';

export const getSavedBooksByStatus = (savedBooks: Dictionary<SavedBook>, status: BookStatus) =>
  Object.keys(savedBooks)
    .filter((id) => savedBooks[id].status === status)
    .map((id) => savedBooks[id])
    .sort((a, b) => a.updatedOnTimestamp - b.updatedOnTimestamp);

export const getCategoryTitle = (category: BookCategory) => {
  switch (category) {
    case BookCategory.Fantasy:
      return 'Fantasy';
    case BookCategory.Horror:
      return 'Horror';
    case BookCategory.Biography:
      return 'Biography';
    default:
      return '';
  }
};
