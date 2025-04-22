
/**
 * Represents a successful result
 */
export type Ok<T> = {
    readonly ok: true;
    value: T;
}

/**
 * Represents an error result
 */
export type Err<E> = {
    readonly ok: false;
    errorCode: E;
}

/**
 * Represents a result of an operation
 */
export type Result<T, E> = Ok<T> | Err<E> 


/**
 * Creates a successful result
 */
export const ok = <T>(value: T): Ok<T> => ({ ok: true, value });

/**
 * Creates an error result
 */
export const err = <E>(errorCode: E): Err<E> => ({ ok: false, errorCode });