import { createSlice } from "@reduxjs/toolkit";
import hc from '../request/hc'

const initialState = {
    post: {},
    loading: false,
};

export const postSlice = createSlice({
    name: "post",

    initialState,

    reducers: {
        setState(state, action) {
            Object.assign(state, action.payload);
        },
    }
});

export const load = (params) => async (dispatch) => {
    dispatch(setState({ loading: true }));

    const post = await hc.get('/article.json');

    dispatch(
        setState({
            loading: false,
            post
        })
    );
};

export const { get, setState } = postSlice.actions;

export default postSlice.reducer;
