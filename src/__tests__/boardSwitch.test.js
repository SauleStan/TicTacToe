import React from "react";
import { shallow } from "enzyme";

import Game3x3 from "../components/game/Game3x3.component";
import Game4x4 from "../components/game/Game4x4.component";
import Game5x5 from "../components/game/Game5x5.component";
import "../setupTests";

describe("Check if game boards load without crashing", () => {
    it("Check if 3x3 loads without crahsing", () => {
        shallow(<Game3x3 />);
    });

    it("Check if 4x4 loads without crahsing", () => {
        shallow(<Game4x4 />);
    });

    it("Check if 5x5 loads without crahsing", () => {
        shallow(<Game5x5 />);
    });

})