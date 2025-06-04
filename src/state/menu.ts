import { createSlice } from '@reduxjs/toolkit';
import { container } from 'src/container';
import { type Menu } from 'src/domain/Menu';

interface MenuState {
  menu: Menu | null;
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  menu: null,
  loading: false,
  error: null,
};

const { getThisWeekMenu } = container;

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getThisWeekMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getThisWeekMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(getThisWeekMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao listar pedidos';
      });
  },
});

export default menuSlice.reducer;
