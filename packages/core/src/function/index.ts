import type { Is } from "#src/types.ts";

/**
 * Checks if the input is a function. Classes are also considered functions.
 *
 * @param input - The value to check
 * @returns `true` if the input is a function, otherwise `false`
 */
export function isFunction(input: unknown) {
	return typeof input === "function";
}

// biome-ignore lint/complexity/noBannedTypes: Function, compared to TypeScript callbacks, provides the properties that every function has.
isFunction satisfies Is<Function>;
