import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

test("Renders Coin component without crashing", () => {
    render(<Coin />);
});

test("Matches snapshot", () => {
    const { asFragment } = render(<Coin />);
    expect(asFragment()).toMatchSnapshot();
});

