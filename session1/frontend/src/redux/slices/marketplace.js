import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import creators from "../../data/quiz2.json";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  quiz2Creators: creators,
  quiz3Creators: [],
  queryQuiz4CreatorsBaselineResponse: null,
  queryQuiz4CreatorsResponse: null,
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
      // My answer: concat the new item(ie.,action.payload) to the old state of quiz2Creators.
      state.quiz2Creators = [...state.quiz2Creators, action.payload];
    },

    // GET QUIZ3 CREATORS
    getQuiz3CreatorsSuccess(state, action) {
      state.isLoading = false;
      state.quiz3Creators = action.payload;
    },

    // ADD A NEW CREATOR FOR QUIZ 3 TO THE STATE
    /* Quiz #3 - 4. (Optional) Better experience with auto-refresh */
    AddNewQuiz3CreatorsSuccess(state, action) {
      state.isLoading = false;
      // 添加数据请求成功是，更新当前数据
      state.quiz3Creators = [...state.quiz3Creators, ...action.payload];
    },

    // GET QUIZ4 CREATORS BASELINE
    queryQuiz4CreatorsBaselineSuccess(state, action) {
      state.isLoading = false;
      state.queryQuiz4CreatorsBaselineResponse = action.payload;
    },

    // GET QUIZ4 CREATORS
    queryQuiz4CreatorsSuccess(state, action) {
      state.isLoading = false;
      state.queryQuiz4CreatorsResponse = action.payload;
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
    // My answer: send a post request with newCreator to the server
    const response = await axios.post(`/api/v1/quiz/addNewQuiz3Creators`, {
      newCreator,
    });
    console.log(response);
    dispatch(slice.actions.AddNewQuiz3CreatorsSuccess(response.data));
  };
};

export const queryQuiz4CreatorsBaseline = (tag) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    const response = await axios.get(
      `/api/v1/quiz/queryQuiz4CreatorsBaseline`,
      {
        params: { tag },
      }
    );
    dispatch(slice.actions.queryQuiz4CreatorsBaselineSuccess(response.data));
  };
};

export const queryQuiz4Creators = (tag) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    const response = await axios.get(`/api/v1/quiz/queryQuiz4Creators`, {
      params: { tag },
    });
    dispatch(slice.actions.queryQuiz4CreatorsSuccess(response.data));
  };
};

// ----------------------------------------------------------------------
// This is just a sample function for sending a POST request to the server.
export const samplePostRequest = (payload) => {
  return async (dispatch) => {
    await axios.post(`/api/v1/sample_post_request`, { payload });
  };
};
