import {render} from "@testing-library/react";
import React from "react";
import PlayerStatus from "./PlayerStatus";

describe('PlayerStatus', function () {
    it('should render', function () {
        expect(render(<PlayerStatus/>)).toMatchSnapshot();
    });
});