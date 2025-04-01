import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    selectedUser: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.allUsers.findIndex((u) => u.id === updatedUser.id);
      if (index !== -1) {
        state.allUsers[index] = updatedUser;
      }
    },
  },
});

export const { setUsers, setSelectedUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
