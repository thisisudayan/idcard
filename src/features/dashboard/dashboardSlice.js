import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idCards: [],
  pageSize: "PDF",
  pageFormat: "A4",
  idCardImages: [],
  themeName: 1

};


export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    idCardsData: ((state, action) => {
      state.idCards = action.payload
    }),
    setPageSize: ((state, action) => {
      state.pageSize = action.payload//--
    }),
    setPageFormat: ((state, action) => {
      state.pageFormat = action.payload//--
    }),
    SetIdCardImages: ((state, action) => {
      state.idCardImages = [...state.idCardImages, action.payload]
    }),
    setThemeName:((state,action)=>{
      state.themeName = action.payload
    })
  },

});

export const { idCardsData, setPageFormat, setPageSize, SetIdCardImages } = dashboardSlice.actions;

export default dashboardSlice.reducer;
