import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalStatus: false,
  idCards: [],
  pageSize: "PDF",
  pageFormat: "A4"

};


export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleModal: ((state) => {
      state.modalStatus = !state.modalStatus
    }),
    idCardsData: ((state, action) => {
      state.idCards = action.payload
    }),
    GetPageSize: ((state, action) => {
      state.pageSize = action.payload
    }),
    GetPageFormat: ((state,action) => {
      state.pageFormat = action.payload
    })
  },

});

export const { toggleModal, idCardsData,GetPageFormat,GetPageSize } = dashboardSlice.actions;

export default dashboardSlice.reducer;
