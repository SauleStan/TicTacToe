import React from "react";
import { mount } from "enzyme";
import Game3x3 from "../components/game/Game3x3.component";
import "../setupTests";


it('After button click, X and O should switch', () => {
    const wrapper = mount(<Game3x3 />);
    
    const buttons = wrapper.find("button.square")
    buttons.at(0).simulate('click');
    
    expect(wrapper.find("button.square").at(0).text()).toBe("X");

    buttons.at(1).simulate('click');
    expect(wrapper.find("button.square").at(1).text()).toBe("O");
        
});