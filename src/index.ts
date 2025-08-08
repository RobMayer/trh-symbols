export namespace TrhSymbols {
    export const Clone = Symbol();
    export const Compare = Symbol();
    export const Equals = Symbol();
    export const TypeOf = Symbol();

    export interface Cloneable {
        [Clone]: () => this;
    }

    export interface Comparable {
        [Compare]: (other: unknown) => number;
    }

    export interface Equatable {
        [Equals]: (other: unknown) => boolean;
    }

    export interface Typeable {
        [TypeOf]: () => string;
    }
}
