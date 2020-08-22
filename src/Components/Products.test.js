import {render} from "@testing-library/react";
import React from "react";
import Products from "./Products";

describe('Products', function () {
    it('should render', function () {
        expect(render(<Products deathCount={3}/>)).toMatchSnapshot();
    });
});