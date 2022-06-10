import { createAction, props } from '@ngrx/store';

export const loadContacts = createAction(
    '[Contacts] Load Contacts',
    props<{ contacts: any }>()
)