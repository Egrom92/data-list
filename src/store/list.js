import { createSlice } from "@reduxjs/toolkit";
import hc from '../request/hc';

const initialState = {
  list: [],
  pageNumber: 1,
  limit: 10,
  numberOfPages: 1,
  loading: false,
};

export const listSlice = createSlice({
  name: "list",

  initialState,

  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },
    changePageNumber(state, action) {

    }
  }
});

export const setNumberOfPages = (params) => async (dispatch) => {
  console.log(initialState)
};

export const load = (params) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  const list = await hc.get('/list.json');
  const numberOfPages = list.list.length / initialState.limit

  dispatch(
      setState({
        loading: false,
        list,
        numberOfPages
      })
  );
};

export const { setState } = listSlice.actions;

export default listSlice.reducer;
