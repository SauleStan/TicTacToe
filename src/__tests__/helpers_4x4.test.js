import { calculateWinner4x4 } from "../helpers";
// import "../setupTests";

describe("Winning condition check 4x4", () => {

    // Check 4x4 grid rows for X winner

    it("check 4x4 row X", () => {
        const grid = [
            "X", "X", "X", null,
            null, null, null, null,
            null, null, null, null,
            null, null, null, null
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe('X');
    });

    it("check 4x4 column X", () => {
        const grid = [
            null, null, null, null,
            null, null, null, "X",
            null, null, null, "X",
            null, null, null, "X"
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe('X');
    });

    it("check 4x4 diagonal X", () => {
        const grid = [
            null, null, null, null,
            null, "X", null, null,
            null, null, "X", null,
            null, null, null, "X"
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe('X');
    });

    

    // Check 4x4 grid rows for O winner

    it("check 4x4 row O win", () => {
        const grid = [
            null, null, null, null,
            null, "O", "O", "O",
            null, null, null, null,
            null, null, null, null
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe('O');
    });

    it("check 4x4 column O win", () => {
        const grid = [
            null, "O", null, null,
            null, "O", null, null,
            null, "O", null, null,
            null, null, null, null
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe('O');
    });

    it("check 4x4 diagonal O win", () => {
        const grid = [
            null, null, "O", null,
            null, "O", null, null,
            "O", null, null, null,
            null, null, null, null
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe('O');
    });


    // Checks for draw

    it("check 4x4 draw", () => {
        const grid = [
            "O", "X", "O", "X",
            "X", "X", "O", "O",
            "O", "O", "X", "X",
            "X", "O", "X", "O",
        ]

        const result = calculateWinner4x4(grid);
        expect(result.isDraw).toBe(true);
    });

    // For less than three in a row there is no winner
    it("check 4x4 for no winner", () => {
        const grid = [
            null, "X", "X", null,
            null, null, null, "X",
            "O", null, "O", null,
            null, null, null, null
        ]

        const result = calculateWinner4x4(grid);
        expect(result.winner).toBe(null);
    });

})