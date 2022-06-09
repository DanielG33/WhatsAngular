import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { contactsReducer } from './contacts';

import { environment } from '../../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  contacts: contactsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
