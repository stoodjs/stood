import { describe, expect, test } from "bun:test";
import { isBoolean } from "#src/boolean/index.ts";

describe(isBoolean, () => {
	test.each([true, false])("returns true for %p", (fixture) => {
		expect(isBoolean(fixture)).toBe(true);
	});

	test.each(["string", 1])("returns false for %p", (fixture) => {
		expect(isBoolean(fixture)).toBe(false);
	});
});
