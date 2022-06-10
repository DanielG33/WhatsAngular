import { createAction, props } from '@ngrx/store';

export const loadChats = createAction(
    '[Chats] Load Chats',
    props<{ chats: any[] }>()
)