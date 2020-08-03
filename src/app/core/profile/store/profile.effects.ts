import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadProfile, editProfile, editProfileFailed, editProfileSuccess, loadProfileSuccess, loadProfileFailed} from './profile.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {of} from 'rxjs';

@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadProfile),
      mergeMap(
        (action) => this.profileService.getProfileInfo(action.id)
          .pipe(
            map( data => loadProfileSuccess({user: data})),
            catchError(error => of(loadProfileFailed))
          )
      )
    )
  );

  constructor(private actions$: Actions,
              private profileService: ProfileService) {}
}
