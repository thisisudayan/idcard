import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rawExcelDataArray: [],
  pageSize: {
    type: "A4",
    width: 1122,
    height: 796,
    //height can be used from here if needed.
  },
  pageFormat: "PDF",
  base64Array: [],
  themeName: 1

};


export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setRawExcelDataArray: ((state, action) => {
      if (!action.payload.length) {
        state.rawExcelDataArray = []
      } else {
        state.rawExcelDataArray = action.payload
      }
    }),
    setPageSize: ((state, action) => {
      state.pageSize = action.payload//--
    }),
    setPageFormat: ((state, action) => {
      state.pageFormat = action.payload//--
    }),
    setIdCardImages: ((state, action) => {
      if (action.payload === -1) {
        state.base64Array = []
      } else {
        state.base64Array = [...state.base64Array, action.payload]
      }
    }),
    setThemeName: ((state, action) => {
      state.themeName = action.payload
    })
  },

});

export const { setRawExcelDataArray, setPageFormat, setPageSize, setIdCardImages } = dashboardSlice.actions;

export default dashboardSlice.reducer;
