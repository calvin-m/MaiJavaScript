import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe('max', () => {
    it('should return the first argument if greater', () => {
        // Arrange

        // Act
        const result = max(2, 1);

        // Assert
        expect(result).toBe(2);
    });
});

describe('[sut_function]', () => {
    it('should always pass', () => {
        expect(true).toBe(true);
    });

    test('should always pass too', () => {
        expect(1).equals(1);
    });
});