import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from './theme.slice';

export default combineReducers({ theme: themeSlice });
