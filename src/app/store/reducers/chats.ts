import { createReducer, on } from '@ngrx/store';
import { loadChats, insertMessage, markAsRead } from '../actions/chats';

export const initialState = [];

export const chatsReducer = createReducer(initialState,
    
    on(loadChats, (state, {chats}) => state.concat(chats)),

    on(insertMessage, (state, {chatId, message}) => state.map(chat => {
        if(chat.id === chatId)
            return {
                ...chat,
                pending: 0,
                messages: chat.messages.concat([message]),
                lastMessage: message
            }
        
        return chat;
    })),

    on(markAsRead, (state, {chatId}) => state.map(chat => {
        if(chat.id === chatId)
            return {
                ...chat,
                pending: 0,
            }
        
        return chat;
    }))
)