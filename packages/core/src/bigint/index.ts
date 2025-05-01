import type { Is } from "#src/types.ts";

/**
 * Checks if the input is a bigint.
 *
 * @param input - The value to check
 * @returns `true` if the input is a bigint, otherwise `false`
 *
 * @example
 * ```ts
 * isBigInt(1n); // true
 * isBigInt(BigInt(1)); // true
 * isBigInt("1n"); // false
 * isBigInt(1); // false
 * ```
 */
export function isBigInt(input: unknown) {
	return typeof input === "bigint";
}

isBigInt satisfies Is<bigint>;
