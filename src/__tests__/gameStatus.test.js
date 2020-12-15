import React from "react";
import { mount } from "enzyme";

import Game3x3 from "../components/game/Game3x3.component";
import "../setupTests";

describe("Game status should change based on situation", () => {
    it('For X winner game status should be Winner: X', () => {
        const wrapper = mount(<Game3x3 />);
        const buttons = wrapper.find("button.square")

        // X
        buttons.at(0).simulate('click');
        // O
        buttons.at(1).simulate('click');
        // X
        buttons.at(4).simulate('click');
        // O
        buttons.at(2).simulate('click');
        // X
        buttons.at(8).simulate('click');

        expect(wrapper.find("div.status").text()).toBe("Winner: X");
    });

    it('For O winner game status should be Winner: O', () => {
        const wrapper = mount(<Game3x3 />);
        const buttons = wrapper.find("button.square")

        // X
        buttons.at(0).simulate('click');
        // O
        buttons.at(1).simulate('click');
        // X
        buttons.at(2).simulate('click');
        // O
        buttons.at(4).simulate('click');
        // X
        buttons.at(8).simulate('click');
        // O
        buttons.at(7).simulate('click');

        expect(wrapper.find("div.status").text()).toBe("Winner: O");
    });

    it('For draw game status should be Draw', () => {
        const wrapper = mount(<Game3x3 />);
        const buttons = wrapper.find("button.square")

        // X
        buttons.at(1).simulate('click');
        // O
        buttons.at(0).simulate('click');
        // X
        buttons.at(3).simulate('click');
        // O
        buttons.at(2).simulate('click');
        // X
        buttons.at(5).simulate('click');
        // O
        buttons.at(4).simulate('click');
        // X
        buttons.at(6).simulate('click');
        // O
        buttons.at(7).simulate('click');
        // X
        buttons.at(8).simulate('click');

        expect(wrapper.find("div.status").text()).toBe("Draw");
    });
})
