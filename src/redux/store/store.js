import { configureStore } from "@reduxjs/toolkit";
// import userAuthSlice from "../slices/userAuthSlice";
// import panelSlice from "../slices/panelSlice";

const store = configureStore({
  reducer: {
    // userAuthSlice,
    // panelSlice,
    //  chatbotSlice,
  },
});

export default store;
