import {ProfileState} from '../../../models/app-state.model';
import {createReducer, on} from '@ngrx/store';
import {editProfileFailed, editProfileSuccess, loadProfileFailed, loadProfileSuccess} from './profile.actions';

export const initialState: ProfileState = {
  user: null,
  error: false
};

export const profileReducer = createReducer(
  initialState,
  on(loadProfileSuccess, (state, action) => ({user: action.user, error: false})),
  on(loadProfileFailed, (state, action) => ({user: undefined, error: true})),
  on(editProfileSuccess, (state, action) => ({user: action.user, error: false})),
  on(editProfileFailed, (state, action) => ({user: undefined, error: true}))
);


