import React from "react";
import ApiService from "../api.service";
import App from "../App";

import "@testing-library/jest-dom/extend-expect";
import {
  cleanup,
  render,
  fireEvent,
  waitForElement
} from "@testing-library/react";

afterEach(cleanup);

const myName = "Kate";
const serverMessage = "Hello from the server";

beforeEach(() => {
  jest
    .spyOn(ApiService, "submitValues")
    .mockResolvedValueOnce({ message: serverMessage });
});

describe("<App />", () => {
  describe("name entered is valid", () => {
    test("should display the message in all caps after submitting name to the server", async () => {
      const { getByLabelText, getByText } = render(<App />);

      const input = getByLabelText("Name:");
      fireEvent.change(input, { target: { value: myName } });

      const submitButton = getByText("Submit");

      fireEvent.click(submitButton);

      // wait for element to be in the document
      const messageDisplay = await waitForElement(() =>
        getByText(serverMessage.toUpperCase())
      );

      expect(messageDisplay).toBeInTheDocument();
    });
  });
});
