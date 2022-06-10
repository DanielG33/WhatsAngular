import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { contactsReducer } from './contacts';
import { chatsReducer } from './chats';

import { environment } from '../../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  contacts: contactsReducer,
  chats: chatsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
