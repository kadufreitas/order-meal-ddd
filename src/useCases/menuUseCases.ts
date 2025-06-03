import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Menu } from 'src/domain/Menu';
import type { Service } from 'src/infra/apiService';

type Dependencies = {
  apiService: Service;
};

const makeCreateMenu = ({ apiService }: Dependencies) => {
  const getThisWeekMenu = createAsyncThunk('menu/getThisWeekMenu', async () => {
    return await apiService.get<Menu>('menu');
  });

  return {
    getThisWeekMenu,
  };
};

export { makeCreateMenu };
