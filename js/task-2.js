class Storage {
    #items = []

    constructor(item) {
        this.#items = item
    }

    getItems() {
        return this.#items
    }

    addItem(newItem) {
        this.#items.push(newItem)
    }

    removeItem(itemToRemove) {
        const indexRemoveItem = this.#items.indexOf(itemToRemove)

        this.#items.splice(indexRemoveItem, 1)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]