import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Checkbox from "./checkbox";

test('Checking', () => { 
    const { getByLabelText } = render(<Checkbox />)
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})