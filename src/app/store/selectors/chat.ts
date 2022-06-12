import { createSelector } from '@ngrx/store';

export interface ChatState {
    id: string,
    messages: any[],
    from: string,
    lastMessage: {},
    contact: any
}

export interface GlobalState {
    contacts: any[],
    chats: ChatState[]
}

export const selectChatsArr = (state: GlobalState) => state.chats;

export const selectChat = (id:string) => createSelector(
    selectChatsArr,
    (state: ChatState[]) => state.find(chat => chat.id === id)
)