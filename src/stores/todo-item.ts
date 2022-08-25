import { action, makeObservable, observable } from "mobx"

export default class TodoItem {

    @observable text: string = ''
    @observable isDone: boolean = false

    constructor(text: string) {
        makeObservable(this)
        this.text = text
    }

    @action
    toggleIsDone = () => {
        this.isDone = !this.isDone
    }

}
