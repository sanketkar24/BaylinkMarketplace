import { createSlice } from '@reduxjs/toolkit';

const mapToggleSlice = createSlice({
  name: 'mapToggle',
  initialState: false,
  reducers: {
    setMapToggle: (state, action) => action.payload,
  },
});

export const { setMapToggle } = mapToggleSlice.actions;
export default mapToggleSlice.reducer;
