import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'slices/user';
import companiesReducer from 'slices/companies';

const rootReducer = combineReducers({
  user: userReducer,
  companies: companiesReducer
});

export default rootReducer;