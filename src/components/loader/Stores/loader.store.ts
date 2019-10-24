import { observable } from "mobx";

export default class LoaderStore {
    @observable public isLoading: boolean;

    constructor() {
        this.isLoading = false;
    }
}