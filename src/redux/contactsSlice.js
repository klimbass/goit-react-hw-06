import { createSlice } from "@reduxjs/toolkit";

const items = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]


const contactsSlice = createSlice(
    {
        name: 'contacts',
        initialState: {items},
        reducers: {
            addContact: {
                reducer: (state, action) => { 
                    state.items.push(action.payload)
                },
                prepare: (value) => {
                    return {
                        payload: {
                            id: crypto.randomUUID(),
                            name: value.name,
                            number: value.number,
                        }
                    }
                }
            },
            deleteContact: (state, action) => {
                state.items = state.items.filter((item) => {
                    return item.id !== action.payload
                })
            },
        }
    }
)

export const { addContact, deleteContact} = contactsSlice.actions
export default contactsSlice.reducer