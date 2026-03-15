export namespace TrhSymbols {
    export const Compare = Symbol();
    export const Contains = Symbol();
    export const Equals = Symbol();
    export const TypeOf = Symbol();

    export const LensNav = Symbol();

    export interface Comparable {
        [Compare]: (other: unknown) => number; // -1, 0, 1
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
