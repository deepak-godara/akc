import { RootState } from "@app/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUniversity = (state: RootState) => state.search.university;
export const selectStudy = (state: RootState) => state.search.study;
