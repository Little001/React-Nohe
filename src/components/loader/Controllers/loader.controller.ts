import LoaderStore from "../Stores/loader.store";

export class LoaderController {
    public store: LoaderStore;

    constructor() {
        this.store = new LoaderStore();
    }

    public isLoading(): boolean {
        return this.store.isLoading;
    }

    public show(): void {
        this.store.isLoading = true;
    }

    public hide(): void {
        this.store.isLoading = false;
    }
}
