import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: 'Yogesh Salunke',
        status: 'loggedIn',
        age: 32,
        location: 'Pune'
    }
  } ;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
       return {...state, user: action.payload };
    },
    updateUser: (state, action) => {
        return {...state, user: action.payload };
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

export const { addUser, updateUser } = userSlice.actions;

//export const initialUserState = (state) => state.users;

export default userSlice.reducer;