import BookStatus from 'enums/BookStatus.enum';

export default interface SavedBook {
  id: string;
  thumbnailUri?: string;
  status: BookStatus;
  updatedOnTimestamp: number;
}
