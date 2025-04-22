import { err, ok, Result } from "./result";
import { describe, it, expect } from "vitest";

describe("Result", () => {
    it("should create a result", () => {
        const result = ok(1);
        expect(result.ok).toBe(true);
        expect(result.value).toBe(1);
    });
    
    it("should create an error result", () => {
        const result = err("ErrorCode1");
        expect(result.ok).toBe(false);
        expect(result.errorCode).toBe("ErrorCode1");
    });
    
    it("function should return a result", () => {
        type DoSomethingErrors = "NotFound" | "InvalidInput";
        function doSomething(): Result<number, DoSomethingErrors> {
            return err("NotFound");
        }
        const result = doSomething();
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.errorCode).toBe("NotFound");
        }
    });
    
    
});