import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Dictionary from 'interfaces/dictionary.interface';
import SavedBook from 'interfaces/savedBook.interface';
import BookStatus from 'enums/BookStatus.enum';

interface BooksState {
  saved: Dictionary<SavedBook>;
}

const initialState: BooksState = {
  saved: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    saveBook: (state, action: PayloadAction<{ id: string; thumbnailUri?: string; status: BookStatus }>) => {
      state.saved[action.payload.id] = {
        ...action.payload,
        updatedOnTimestamp: Date.now(),
      };
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const { [action.payload]: value, ...withoutItem } = state.saved;

      return { saved: withoutItem };
    },
  },
});

export const { saveBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
