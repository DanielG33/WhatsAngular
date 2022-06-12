import { createAction, props } from '@ngrx/store';

export const loadChats = createAction(
    '[Chats] Load Chats',
    props<{ chats: any[] }>()
)

export const insertMessage = createAction(
    '[Chats] Insert Message',
    props<{ chatId: string, message: any }>()
)

export const markAsRead = createAction(
    '[Chats] Mark (chat) As Read',
    props<{ chatId: string }>()
)