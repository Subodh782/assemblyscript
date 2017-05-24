/** An 8-bit unsigned integer. */
declare type byte = number;

/** An 8-bit signed integer. */
declare type sbyte = number;

/** A 16-bit signed integer. */
declare type short = number;

/** A 16-bit unsigned integer. */
declare type ushort = number;

/** A 32-bit signed integer. */
declare type int = number;

/** A 32-bit unsigned integer. */
declare type uint = number;

/** A 64-bit signed integer. */
declare type long = number;

/** A 64-bit unsigned integer. */
declare type ulong = number;

/** A 32-bit float. */
declare type float = number;

/** A 64-bit float. */
declare type double = number;

/** A 32-bit unsigned integer when targeting WASM32 respectively a 64-bit unsigned integer when targeting WASM64. */
declare type uintptr = number;

/** A class describing a pointer to a data structure. */
declare class Ptr<T extends number | object> {
    public offset: uintptr;
    public value: T;
    constructor(offset: uintptr);
    public increment(diff: uintptr): this;
    public decrement(diff: uintptr): this;
}

/** Retrieves the byte size of a data structure. */
declare function sizeof<T>(): uintptr;

declare function sizeof<byte>()   : 1;
declare function sizeof<sbyte>()  : 1;
declare function sizeof<short>()  : 2;
declare function sizeof<ushort>() : 2;
declare function sizeof<int>()    : 4;
declare function sizeof<uint>()   : 4;
declare function sizeof<long>()   : 8;
declare function sizeof<ulong>()  : 8;
declare function sizeof<float>()  : 4;
declare function sizeof<double>() : 8;

// Fillers for TypeScript complaining about missing types with 'nolib'
interface Array<T> { }
interface Boolean { }
interface Function { }
interface IArguments { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }