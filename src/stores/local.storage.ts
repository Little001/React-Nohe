export enum StorageItem {
    Token
}

export class LocalStorage {
    private localStorage: Storage;

    constructor(localStorage: Storage) {
        this.localStorage = localStorage;
    }

    public getItem(item: StorageItem): string | null {
        return this.localStorage.getItem(this.getItemName(item));
    }

    public setItem(item: StorageItem, value: string) {
        this.localStorage.setItem(this.getItemName(item), value);
    }

    public removeItem(item: StorageItem) {
        this.localStorage.removeItem(this.getItemName(item));
    }

    public clearStorage(): void {
        this.localStorage.clear();
    }

    private getItemName(item: StorageItem): string {
        switch(item) {
        case StorageItem.Token:
            return "token";
        default: throw new Error(`'${item}' is not supported item in local storage`);
        }
    }
    
}
