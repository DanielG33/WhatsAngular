import { createReducer, on } from '@ngrx/store';
import { loadContacts } from '../actions/contacts';

export const initialState = [];

export const contactsReducer = createReducer(
    initialState,
    on(loadContacts, (state, {contacts}) => contacts)
)