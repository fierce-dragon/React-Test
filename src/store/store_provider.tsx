import { createContext } from 'react';
import NoteList from './note_list';

export const StoreContext = createContext<NoteList>({} as NoteList);
export const StoreProvider = StoreContext.Provider;
