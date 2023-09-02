import { Slice } from "@reduxjs/toolkit";

export const getActionCreatorName = (slice: Slice) => {
  const actions = slice.actions;
  const actionNames: { [key: string]: string } = {};
  for (let key in actions) {
    actionNames[key] = `${slice.name}/${key}`;
  }
  return actionNames;
};
