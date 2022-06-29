import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinContainer from "./CoinContainer";

beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValueOnce(0.25).mockReturnValueOnce(0.75);
});

test("Renders component without crashing", () => {
    render(<CoinContainer />);
});

test("Matches snapshot", () => {
    const { asFragment } = render(<CoinContainer />);
    expect(asFragment()).toMatchSnapshot();
});

it("doesn't show a coin on page load", () => {
    const { queryByTestId } = render(<CoinContainer />);
    expect(queryByTestId("coin")).toBeNull();
});

it("counts correctly when heads appears", () => {
    const { getByText, queryByAltText } = render(<CoinContainer />);

    const button = getByText("Flip Me!");
    fireEvent.click(button);

    expect(queryByAltText("head")).toBeInTheDocument();
    expect(queryByAltText("tail")).not.toBeInTheDocument();
    expect(
        getByText("Out of 1 flips, there have been 1 heads and 0 tails.")
    ).toBeInTheDocument();
});

it("counts correctly when tails appears", () => {
    const { getByText, queryByAltText } = render(<CoinContainer />);

    const button = getByText("Flip Me!");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(queryByAltText("tail")).toBeInTheDocument();
    expect(queryByAltText("head")).not.toBeInTheDocument();
    expect(
        getByText("Out of 2 flips, there have been 1 heads and 1 tails.")
    ).toBeInTheDocument();
});

afterEach(() => {
    Math.random.mockRestore();
});

