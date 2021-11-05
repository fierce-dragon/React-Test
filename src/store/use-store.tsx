import { useContext } from 'react';
import { StoreContext } from './store_provider';
import NoteList from './note_list';

export const useStore = (): NoteList => useContext(StoreContext);
