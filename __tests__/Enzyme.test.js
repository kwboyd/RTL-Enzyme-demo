import React from "react";
import { mount } from "enzyme";
import ApiService from "../api.service";
import App from "../App";
import { act } from "react-dom/test-utils";

const myName = "Kate";
const serverMessage = "Hello from the server";

beforeEach(() => {
  jest
    .spyOn(ApiService, "submitValues")
    .mockResolvedValueOnce({ message: serverMessage });
});

describe("<App />", () => {
  describe("name entered is valid", () => {
    it("should display the message in all caps after submitting name to the server", async () => {
      const wrapper = mount(<App />);

      const input = wrapper.find('[name="name-input"]');
      input.simulate("change", { target: { value: myName } });

      const submitButton = wrapper.find("#submit-button");

      submitButton.simulate("submit");

      // submitButton.simulate("click");
      // doesn't work in enzyme because it does not simulate DOM behavior
      // the onClick of a type="submit" button does not trigger the form submit

      // act indicates that a hook (useEffect) will need to trigger
      await act(async () => {
        // flush out your promises
        await Promise.resolve();
      });

      // update the rendered component
      wrapper.update();

      const messageDisplay = wrapper.find("#server-message");
      expect(messageDisplay.text().includes(serverMessage.toUpperCase())).toBe(
        true
      );
    });
  });
});
