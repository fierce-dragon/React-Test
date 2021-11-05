import { action, makeObservable, observable } from "mobx";
import NoteItem from "./note_item";

interface note_obj {
    title: string
    content : string
}

class NoteList {
    @observable.shallow list: NoteItem[] = [];

    constructor(notes: string[]) {
        makeObservable(this);
        notes.forEach(this.addNote);
    }

    @action
    addNote = (data : string) => {
        const json_data : note_obj = JSON.parse(data)
        this.list.push(new NoteItem(json_data.title, json_data.content))
    }

    @action
    removeNote = (note: NoteItem) => {
        this.list.splice(this.list.indexOf(note), 1);
    }
}

export default NoteList;