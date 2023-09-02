import { createSlice } from "@reduxjs/toolkit";
import { optionType } from "@components/LandingPage/FormSelect";

interface SearchTerms {
  university: optionType | undefined;
  study: optionType | undefined;
  grade: optionType | undefined;
}

const initialState: SearchTerms = {
  university: undefined,
  study: undefined,
  grade: undefined,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUniversity: (state, action) => {
      state.university = action.payload;
    },
    setStudy: (state, action) => {
      state.study = action.payload;
    },
    setGrade: (state, action) => {
      state.grade = action.payload;
    },
  },
});
