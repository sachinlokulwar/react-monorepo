import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users');
  return (await response.json()).data;
});

export const addUsers = createAsyncThunk('users/addUsers', async () => {
  const data = {
    name: 'test',
    job: 'leader'
  }
  console.log(data);
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return (await response.json());
});

export const selectUsers = (state) => state.users;

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] ,
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      const userData = {
        first_name: action.payload.name,
        id: action.payload.id,
        email: action.payload.job,
        avatar: 'https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg'
      }
      state.users = [...state.users, userData];
      state.loading = false;
    });
    builder.addCase(addUsers.rejected, (state) => {
      state.loading = false;
    });
  }
});

export default usersSlice.reducer;