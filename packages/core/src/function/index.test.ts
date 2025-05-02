import { describe, expect, test } from "bun:test";
import { isFunction } from "#src/function/index.ts";

describe(isFunction, () => {
	test.each([
		() => {},
		// biome-ignore lint/complexity/useArrowFunction: testing all types of functions
		function () {},
		class {},
		new Function(),
	])("returns true for %p", (fixture) => {
		expect(isFunction(fixture)).toBe(true);
	});

	test.each([
		1,
		"string",
		true,
		null,
		undefined,
		{},
		Symbol(),
		1n,
		new Date(),
		new Error(),
		new Map(),
		new Set(),
		new WeakMap(),
		new WeakSet(),
	])("returns false for %p", (fixture) => {
		expect(isFunction(fixture)).toBe(false);
	});
});
