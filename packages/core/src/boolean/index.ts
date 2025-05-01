import type { Is } from "#src/types.ts";

/**
 * Checks if the input is a boolean.
 *
 * @param input - The value to check
 * @returns `true` if the input is a boolean, otherwise `false`
 *
 * @example
 * ```ts
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean("true"); // false
 * isBoolean(1); // false
 * ```
 */
export function isBoolean(input: unknown) {
	return typeof input === "boolean";
}

isBoolean satisfies Is<boolean>;
