import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import creators from "../../data/quiz2.json";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  quiz2Creators: creators,
  quiz3Creators: [],
};

const slice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ADD A NEW CREATOR FOR QUIZ 2 TO THE STATE
    addNewQuiz2Creator(state, action) {
      /* Quiz #2 - 2. Complete the `Add` feature */
      /* Your code goes here */
    },

    // GET QUIZ3 CREATORS
    getQuiz3CreatorsSuccess(state, action) {
      state.isLoading = false;
      state.quiz3Creators = action.payload;
    },

    // ADD A NEW CREATOR FOR QUIZ 3 TO THE STATE
    AddNewQuiz3CreatorsSuccess(state) {
      state.isLoading = false;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { addNewQuiz2Creator } = slice.actions;

// ----------------------------------------------------------------------
export const getQuiz3Creators = () => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    const response = await axios.get(`/api/v1/quiz/getQuiz3Creators`);
    dispatch(slice.actions.getQuiz3CreatorsSuccess(response.data));
  };
};

export const addNewQuiz3Creators = (newCreator) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    /* Quiz #3 - 2. Send a POST request to the server */
    /* Your code goes here */
    await axios.post(`/api/v1/quiz/addNewQuiz3Creators`, { newCreator });
    dispatch(slice.actions.AddNewQuiz3CreatorsSuccess());
  };
};

// ----------------------------------------------------------------------
// This is just a sample function for sending a POST request to the server.
export const samplePostRequest = (payload) => {
  return async (dispatch) => {
    await axios.post(`/api/v1/sample_post_request`, { payload });
  };
};
