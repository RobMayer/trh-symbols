# @trh/symbols

TypeScript symbols and interfaces for protocol-based programming.

## Installation

```bash
pnpm add @trh/symbols
```

## Usage

```typescript
import { TrhSymbols } from "@trh/symbols";

// Cloneable objects
class Point implements TrhSymbols.Cloneable {
    constructor(public x: number, public y: number) {}

    [TrhSymbols.Clone](): this {
        return new Point(this.x, this.y) as this;
    }
}

// Comparable objects
class Version implements TrhSymbols.Comparable {
    constructor(public major: number, public minor: number) {}

    [TrhSymbols.Compare](other: unknown): number {
        if (!(other instanceof Version)) {
            return this < other ? -1 : this > other ? 1 : 0;
        }
        if (this.major !== other.major) return this.major > other.major ? 1 : -1;
        if (this.minor !== other.minor) return this.minor > other.minor ? 1 : -1;
        return 0;
    }
}

// Containable objects
class Range implements TrhSymbols.Containable<number> {
    constructor(public min: number, public max: number) {}

    [TrhSymbols.Contains](value: number): boolean {
        return value >= this.min && value <= this.max;
    }
}

// Equatable objects
class User implements TrhSymbols.Equatable {
    constructor(public id: string) {}

    [TrhSymbols.Equals](other: unknown): boolean {
        return other instanceof User && other.id === this.id;
    }
}

// Typeable objects
class CustomClass implements TrhSymbols.Typeable {
    [TrhSymbols.TypeOf](): string {
        return "CustomClass";
    }
}

// LensNavigable objects
class State implements TrhSymbols.LensNavigable {
    value = 0;

    [TrhSymbols.LensNav] = {
        value: {
            access: () => this.value,
            mutate: (v: number) => { this.value = v; },
        },
    };
}
```

## API

### Symbols

- `TrhSymbols.Clone` - Symbol for cloning operations
- `TrhSymbols.Compare` - Symbol for comparison operations
- `TrhSymbols.Contains` - Symbol for containment checks
- `TrhSymbols.Equals` - Symbol for equality checks
- `TrhSymbols.TypeOf` - Symbol for type identification
- `TrhSymbols.LensNav` - Symbol for lens-based navigation/access

### Interfaces

- `TrhSymbols.Cloneable` - Objects that can clone themselves
- `TrhSymbols.Comparable` - Objects that can be compared with others (returns -1, 0, 1)
- `TrhSymbols.Containable<T>` - Objects that can check if they contain a value
- `TrhSymbols.Equatable` - Objects that can check equality with others
- `TrhSymbols.Typeable` - Objects that can return their type name
- `TrhSymbols.LensNavigable` - Objects that expose lens-based property access, with optional `mutate` and `apply` methods

## License

UNLICENSE
