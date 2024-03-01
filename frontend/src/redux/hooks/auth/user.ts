import { UserData } from "@/src/utils/types/userTypes";
import { createSlice } from "@reduxjs/toolkit";

interface InitialUserState {
  user: null | UserData;
}

const initialState: InitialUserState = {
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser(state, { payload }) {
      state.user = payload;
    },
    setLogoutUser(state) {
      state.user = null;
    },
  },
});

const { setLoginUser, setLogoutUser } = user.actions;
export { setLoginUser, setLogoutUser };
export default user.reducer;
