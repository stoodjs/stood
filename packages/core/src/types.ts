/**
 * A type guard function that checks if a value is of a specific type.
 * 
 * @template Type - The type to check against
 * @param input - The value to type check
 * @returns A boolean indicating if the input is of {@link Type} type
 * 
 * @example
 * ```ts
 * // Basic string type guard
 * const isString = (input: unknown): input is string => typeof input === "string";
 * isString satisfies Is<string>;
 * 
 * // Usage examples
 * isString("Hello"); // true
 * isString(42); // false
 * 
 * // With type narrowing
 * const value: unknown = "test";
 * if (isString(value)) {
 *   value.toUpperCase(); // TypeScript knows value is string
 * }
 * ```
 */
export interface Is<Type> {
	(input: unknown): input is Type;
}
