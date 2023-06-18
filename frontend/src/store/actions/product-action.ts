import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
      const response = await axios.get('/api/users');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
});