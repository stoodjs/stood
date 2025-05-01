import { describe, expect, test } from "bun:test";
import { isBigInt } from "#src/bigint/index.ts";

describe(isBigInt, () => {
	test.each([1n])("returns true for %p", (fixture) => {
		expect(isBigInt(fixture)).toBe(true);
	});

	test.each([1, "a", true])("returns false for %p", (fixture) => {
		expect(isBigInt(fixture)).toBe(false);
	});
});
