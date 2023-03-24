import { createSlice, nanoid } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(
                name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const contactReducer = contactsSlice.reducer;

const persistConfig = {
    key: 'contacts',
    storage,
};

export const persistedContactsReducer = persistReducer(
    persistConfig,
    contactReducer
);