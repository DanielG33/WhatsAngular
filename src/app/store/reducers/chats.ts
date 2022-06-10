import { createReducer, on } from '@ngrx/store';
import { loadChats } from '../actions/chats';

export const initialState = [];

export const chatsReducer = createReducer(
    initialState,
    on(loadChats, (state, {chats}) => chats)
)