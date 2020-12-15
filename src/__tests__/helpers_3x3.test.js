import { calculateWinner3x3 } from "../helpers";
// import "../setupTests";

describe("Winning condition check 3x3", () => {

    // Check 3x3 grid rows for X winner

    it("check 3x3 first row X", () => {
        const grid = [
            "X", "X", "X",
            null, null, null,
            null, null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    it("check 3x3 second row X", () => {
        const grid = [
            null, null, null,
            "X", "X", "X",
            null, null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    it("check 3x3 third row X", () => {
        const grid = [
            null, null, null,
            null, null, null,
            "X", "X", "X"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    // Check 3x3 grid columns for X winner

    it("check 3x3 first column X", () => {
        const grid = [
            "X", null, null,
            "X", null, null,
            "X", null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    it("check 3x3 second column X", () => {
        const grid = [
            null, "X", null,
            null, "X", null,
            null, "X", null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    it("check 3x3 third column X", () => {
        const grid = [
            null, null, "X",
            null, null, "X",
            null, null, "X"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    // Checks 3x3 grid diagonals for X winner 

    it("check 3x3 first diagonal X", () => {
        const grid = [
            null, null, "X",
            null, "X", null,
            "X", null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    it("check 3x3 second diagonal X", () => {
        const grid = [
            "X", null, null,
            null, "X", null,
            null, null, "X"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('X');
    });

    // Check 3x3 grid rows for O winner

    it("check 3x3 first row O", () => {
        const grid = [
            "O", "O", "O",
            null, null, null,
            null, null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    it("check 3x3 second row O", () => {
        const grid = [
            null, null, null,
            "O", "O", "O",
            null, null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    it("check 3x3 third row O", () => {
        const grid = [
            null, null, null,
            null, null, null,
            "O", "O", "O"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    // Check 3x3 grid columns for O winner

    it("check 3x3 first column O", () => {
        const grid = [
            "O", null, null,
            "O", null, null,
            "O", null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    it("check 3x3 second column O", () => {
        const grid = [
            null, "O", null,
            null, "O", null,
            null, "O", null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    it("check 3x3 third column O", () => {
        const grid = [
            null, null, "O",
            null, null, "O",
            null, null, "O"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    // Checks 3x3 grid diagonals for O winner 

    it("check 3x3 first diagonal O", () => {
        const grid = [
            null, null, "O",
            null, "O", null,
            "O", null, null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    it("check 3x3 second diagonal O", () => {
        const grid = [
            "O", null, null,
            null, "O", null,
            null, null, "O"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe('O');
    });

    // Checks for draw

    it("check 3x3 draw", () => {
        const grid = [
            "X", "O", "X",
            "X", "O", "X",
            "O", "X", "O"
        ]

        const result = calculateWinner3x3(grid);
        expect(result.isDraw).toBe(true);
    });

    // Check for no winner

    it("check 3x3 for no winner", () => {
        const grid = [
            "X", "O", "X",
            null, null, null,
            null, "X", null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe(null);
    });

    // Check incorrect input
    
    it("check 3x3 incorrect input for no win", () => {
        const grid = [
            "X", "X'", "X",
            null, null, null,
            null, "X", null
        ]

        const result = calculateWinner3x3(grid);
        expect(result.winner).toBe(null);
    });

})