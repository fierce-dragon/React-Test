import { makeObservable, observable, action } from "mobx";

class NoteItem {
    @observable title : string = ""
    @observable content : string = ""
    @observable selected : boolean = false

    constructor(title: string, content: string) {
        makeObservable(this);
        this.title = title
        this.content = content
    }

    @action
    isSelected = () => {
        this.selected = true
    }

    @action
    noSelected = () => {
        this.selected = false
    }

    @action
    setTitle = (title : string) => {
        this.title = title
    }

    @action
    setContent = (content : string) => {
        this.content = content
    }
}

export default NoteItem;