
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as companiesApi from 'api/companies';

export const getCompanies = createAsyncThunk('companies/getCompanies',
    async (data) => {
            const response = await companiesApi.getCompanies(data);
            return { result: response.data };
    }
);

export const searchCompanies = createAsyncThunk('companies/getCompanies',
    async (data) => {
            const response = await companiesApi.searchCompanies(data);
            return { result: response.data };
    }
);

const initialState = {
    companies: [],
    currentPage: 1,
    perPage: 30,
    totalEntries: 1000,
    loading: false,
    error: null,
};

  const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        changePageLimit(state, {payload}) {
            state.perPage = payload
          },
    },
    extraReducers: {
        [getCompanies.pending]: (state) => {
            state.loading = true;
        },
        [getCompanies.fulfilled]: (state, { payload }) => {
            state.companies = payload.result.data
            state.perPage = payload.result.per_page
            state.currentPage = payload.result.current_page
            state.totalEntries = payload.result.total_entries
            state.loading = false;
        }
    },
  })

  export const { changePageLimit } = companiesSlice.actions;

  export default companiesSlice.reducer;