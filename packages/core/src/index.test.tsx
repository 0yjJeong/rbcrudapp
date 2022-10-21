import React from "react";
import { render, screen } from "@testing-library/react";

import { Admin } from "./";

describe("Admin", () => {
  it("should render", () => {
    render(<Admin id="id" />);
    expect(screen.getByText(/Hello, id/)).toBeInTheDocument();
  });
});
