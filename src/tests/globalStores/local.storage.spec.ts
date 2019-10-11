import { LocalStorage, StorageItem } from "../../globalStores/local.storage";
import { CleanUp } from "../tools/helper";

describe("Local storage", () => {
    let storage: LocalStorage;

    beforeEach(() => {
        storage = new LocalStorage(window.localStorage);
    });

    it("GET / SET", () => {
        expect(storage.getItem(StorageItem.Token)).toBeNull();

        storage.setItem(StorageItem.Token, "tokenTest");
        expect(storage.getItem(StorageItem.Token)).toBe("tokenTest");
    });

    it ("REMOVE / CLEAR", () => {
        storage.setItem(StorageItem.Token, "tokenTest");
        storage.removeItem(StorageItem.Token);
        expect(storage.getItem(StorageItem.Token)).toBeNull();

        storage.setItem(StorageItem.Token, "tokenTest");
        storage.clearStorage()
        expect(storage.getItem(StorageItem.Token)).toBeNull();
    });
    
    describe("Window LocalStorage", () => {
        it("GET", () => {
            storage.setItem(StorageItem.Token, "tokenTest");
            expect(window.localStorage.getItem("token")).toBe("tokenTest");

            storage.removeItem(StorageItem.Token);
            expect(window.localStorage.getItem("token")).toBeNull();

            storage.setItem(StorageItem.Token, "tokenTest2");
            storage.clearStorage();
            expect(window.localStorage.getItem("token")).toBeNull();
        });
    });

    afterEach(() => {
        CleanUp();
    });
});
