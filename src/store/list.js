import { createSlice } from "@reduxjs/toolkit";
import hc from '../request/hc';

const getInitialState = () => ({
  list: [],
  page: 1,
  pages: 1,
  limit: 10,
  field: null,
  dir: null,
  loading: false,
  tableHeaders: [
    {
      field: 'firstname',
      name: 'Eesnimi'
    },
    {
      field: 'surname',
      name: 'Perekonnanimi'
    },
    {
      field: 'sex',
      name: 'Sugu'
    },
    {
      field: 'date',
      name: 'Sünnikuupäev'
    },
    {
      field: 'phone',
      name: 'Telefon'
    },
  ],
  activeTr: null
})

export const listSlice = createSlice({
  name: "list",

  initialState: getInitialState(),

  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },

    turnPage(state, action) {
      const page = action.payload

      if (1 <= page && page <= state.pages) {
        state.page = page
      }
    }
  }
});

export const load = (params) => async (dispatch, getState) => {
  dispatch(setState({ loading: true }));
  const state = getState().list

  const { list } = await hc.get('/list.json');
  const pages = Math.ceil(list.length / state.limit)

  dispatch(
    setState({
      loading: false,
      list,
      pages
    })
  );
};

export const { setState, turnPage } = listSlice.actions;

export default listSlice.reducer;
