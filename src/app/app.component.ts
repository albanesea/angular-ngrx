import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, ProfileState} from './models/app-state.model';
import {Observable} from 'rxjs';
import {getProfile} from './core/profile/store/profile.selectors';
import {loadProfile} from './core/profile/store/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-learning';

  profile$: Observable<ProfileState>;

  constructor(private store: Store<AppState>) {
    this.profile$ = this.store.pipe(select(getProfile));
  }

  loadProfile(): any {
    this.store.dispatch(loadProfile({id : 1}));
  }
}
