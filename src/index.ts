export namespace TrhSymbols {
    export const Clone = Symbol.for("@trh/symbols/Clone");

    export interface Cloneable {
        [Clone]: () => this;
    }

    export const Compare = Symbol.for("@trh/symbols/Compare");
    export const Contains = Symbol.for("@trh/symbols/Contains");
    export const Equals = Symbol.for("@trh/symbols/Equals");
    export const TypeOf = Symbol.for("@trh/symbols/TypeOf");
    export const LensNav = Symbol.for("@trh/symbols/LensNav");

    export interface Comparable {
        [Compare]: (other: unknown) => number | null; // -1, 0, 1; null indicates meaningless comparison
    }

    export interface Containable<T> {
        [Contains]: (other: T) => boolean;
    }

    export interface Equatable {
        [Equals]: (other: unknown) => boolean;
    }

    export interface Typeable {
        [TypeOf]: () => string;
    }

    export interface LensNavigable {
        [LensNav]: {
            [method: string]: ({ access: (...args: any[]) => any } | { compute: (...args: any[]) => any }) & {
                mutate?: (...args: any[]) => any;
                apply?: (...args: any[]) => any;
            };
        };
    }
}
