import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Theme from 'enums/Theme.enum';

interface CommonState {
  theme: Theme;
}

const initialState: CommonState = {
  theme: Theme.Dark,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = commonSlice.actions;

export default commonSlice.reducer;
