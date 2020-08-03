import { User } from './user.model';

export interface AppState {
  profile: ProfileState;
}

export interface ProfileState {
  user: User;
  error: boolean;
}
