export class Settings {
    static #props: any = {};

    static get = (prop: any) => this.#props[prop];

    static add(prop: any, value: any) {
        if (!Object.getOwnPropertyDescriptors(this)[prop]) {
            Object.defineProperty(this, prop, {
                configurable: true,
                enumerable: true,
                get: () => this.#props[prop],
                set: (val) => this.#props[prop] = val,
            });
        }
        this.#props[prop] = value;
    }

    static remove(prop: any) { delete this.#props[prop]; }
}