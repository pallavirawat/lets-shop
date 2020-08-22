import {render} from "@testing-library/react";
import React from "react";
import Products from "./Products";

describe('Products', function () {
    it('should render', function () {
        const props= {
            deathCount: 3,
            creditLimit: 100,
            stage: 1,
            setDeathCount: jest.fn(),
            setCreditLimit: jest.fn(),
            setStage: jest.fn()
        }
        expect(render(<Products {...props}/>)).toMatchSnapshot();
    });
});