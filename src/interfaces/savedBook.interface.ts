import BookStatus from 'enums/BookStatus.enum';

export default interface SavedBook {
  id: string;
  title: string;
  authors?: string;
  thumbnailUri?: string;
  status: BookStatus;
}
