import { render } from "@testing-library/react";
import { describe, it } from "node:test";
import App from "./App";
import "../__mocks__/matchMedia.js";

describe("App rendering", () => {
  // Added the matchMedia to the setup-test.ts file, is equivalent to mock beforeAll()

  test("demo", () => {
    expect(true).toBe(true);
  });

  it("Renders App", () => {
    render(<App />);
  });

  // const { asFragment } = render(<App />);

  // expect(asFragment()).toMatchSnapshot();
});
