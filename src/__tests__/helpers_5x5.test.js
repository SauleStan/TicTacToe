import { calculateWinner5x5 } from "../helpers";
// import "../setupTests";

describe("Winning condition check 5x5", () => {

    // Check 5x5 grid rows for X winner

    it("check 5x5 row X", () => {
        const grid = [
            "X", "X", "X", null, null,
            null, null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null
        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe('X');
    });

    it("check 5x5 column X", () => {
        const grid = [
            null, null, null, null, null,
            null, null, null, "X", null,
            null, null, null, "X", null,
            null, null, null, "X", null,
            null, null, null, null, null

        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe('X');
    });

    it("check 5x5 diagonal X", () => {
        const grid = [
            null, null, null, null, null,
            null, "X", null, null, null,
            null, null, "X", null, null,
            null, null, null, "X", null,
            null, null, null, null, null

        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe('X');
    });

    

    // Check 5x5 grid rows for O winner

    it("check 5x5 row O win", () => {
        const grid = [
            null, null, null, null, null,
            null, "O", "O", "O", null,
            null, null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null

        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe('O');
    });

    it("check 5x5 column O win", () => {
        const grid = [
            null, "O", null, null, null,
            null, "O", null, null, null,
            null, "O", null, null, null,
            null, null, null, null, null,
            null, null, null, null, null
        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe('O');
    });

    it("check 5x5 diagonal O win", () => {
        const grid = [
            null, null, "O", null, null,
            null, "O", null, null, null,
            "O", null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null

        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe('O');
    });

    // Checks for draw

    it("check 5x5 draw", () => {
        const grid = [
            "X", "O", "X", "O", "X",
            "X", "O", "X", "O", "X",
            "O", "X", "O", "X", "O",
            "O", "X", "O", "X", "O",
            "X", "O", "X", "O", "X"

        ]

        const result = calculateWinner5x5(grid);
        expect(result.isDraw).toBe(true);
    });

    // Checks 5x5 for no winner 

    it("check 5x5 for no winner", () => {
        const grid = [
            null, null, "O", null, null,
            null, "X", null, null, null,
            "O", null, null, null, null,
            null, null, null, "O", null,
            null, "X", null, null, null

        ]

        const result = calculateWinner5x5(grid);
        expect(result.winner).toBe(null);
    });

})