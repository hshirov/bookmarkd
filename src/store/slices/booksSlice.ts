import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Dictionary from 'interfaces/dictionary.interface';
import BookStatus from 'enums/BookStatus.enum';

interface BookShape {
  title: string;
  authors?: string;
  thumbnailUri?: string;
  status: BookStatus;
}

interface BooksState {
  saved: Dictionary<BookShape>;
}

const initialState: BooksState = {
  saved: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    saveBook: (state, action: PayloadAction<{ id: string; book: BookShape }>) => {
      state.saved[action.payload.id] = action.payload.book;
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const { [action.payload]: value, ...withoutItem } = state.saved;

      return { saved: withoutItem };
    },
  },
});

export const { saveBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
