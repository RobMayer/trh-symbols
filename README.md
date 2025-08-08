# TRH Symbols

TypeScript symbols and interfaces for protocol-based programming.

## Installation

```bash
npm install trh-symbols
```

## Usage

```typescript
import { TrhSymbols } from "trh-symbols";

// Implement cloneable objects
class Point implements TrhSymbols.Cloneable {
    constructor(public x: number, public y: number) {}

    [TrhSymbols.Clone](): this {
        return new Point(this.x, this.y) as this;
    }
}

// Implement comparable objects
class Version implements TrhSymbols.Comparable {
    constructor(public major: number, public minor: number) {}

    [TrhSymbols.Compare](other: unknown): number {
        if (!(other instanceof Version)) {
            return this < other ? -1 : this > other ? 1 : 0;
        }
        if (this.major !== other.major) {
            return this.major > other.major ? 1 : -1;
        }
        if (this.minor !== other.minor) {
            return this.minor > other.minor ? 1 : -1;
        }
        return 0;
    }
}

// Implement equatable objects
class User implements TrhSymbols.Equatable {
    constructor(public id: string) {}

    [TrhSymbols.Equals](other: unknown): boolean {
        return other instanceof User && other.id === this.id;
    }
}

// Implement typeable objects
class CustomClass implements TrhSymbols.Typeable {
    [TrhSymbols.TypeOf](): string {
        return "CustomClass";
    }
}
```

## API

### Symbols

-   `TrhSymbols.Clone` - Symbol for cloning operations
-   `TrhSymbols.Compare` - Symbol for comparison operations
-   `TrhSymbols.Equals` - Symbol for equality checks
-   `TrhSymbols.TypeOf` - Symbol for type identification

### Interfaces

-   `TrhSymbols.Cloneable` - Objects that can clone themselves
-   `TrhSymbols.Comparable` - Objects that can be compared with others
-   `TrhSymbols.Equatable` - Objects that can check equality with others
-   `TrhSymbols.Typeable` - Objects that can return their type name

## License

MIT
