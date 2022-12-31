import BookStatus from 'enums/BookStatus.enum';
import Dictionary from 'interfaces/dictionary.interface';
import SavedBook from 'interfaces/savedBook.interface';

export const getSavedBooksByStatus = (savedBooks: Dictionary<SavedBook>, status: BookStatus) =>
  Object.keys(savedBooks)
    .filter((id) => savedBooks[id].status === status)
    .map((id) => savedBooks[id]);
