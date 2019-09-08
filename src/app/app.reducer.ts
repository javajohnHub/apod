import * as fromUI from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducers';
import * as fromWelcome from './welcome/welcome.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  ui: fromUI.State;
  auth: fromAuth.State;
  stats: fromWelcome.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer,
  stats: fromWelcome.statsReducer
}

export const getUIState = createFeatureSelector<fromUI.State>('ui');

export const getIsLoading = createSelector(getUIState, fromUI.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

export const getStatsState = createFeatureSelector<fromWelcome.State>('stats');
