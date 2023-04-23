import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategoriesAsync",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      thunkAPI.dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      thunkAPI.dispatch(fetchCategoriesFail(error));
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(state) {
      state.isLoading = true;
    },
    fetchCategoriesSuccess(state, action) {
      state.isLoading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFail(state, action) {
      state.isLoading = false;
      state.categories = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFail,
} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
