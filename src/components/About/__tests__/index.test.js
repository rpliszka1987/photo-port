import React from "react";
// import render and cleanup fomr @testing-library/react package
import { render, cleanup } from "@testing-library/react";
// render will render the component
// cleanup removes components from DOM to revent memory leaking

// import jest-dom package
import "@testing-library/jest-dom/extend-expect";

// Impoer About component
import About from "..";

// cleans up any leftover memory data from previous test
afterEach(cleanup);

describe("Abput component", () => {
  // check if component is rendering
  it("renders", () => {
    render(<About />);
  });
  //   snapshot test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
