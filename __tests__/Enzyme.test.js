import React from "react";
import { mount } from "enzyme";
import ApiService from "../api.service";
import App from "../App";
import { act } from "react-dom/test-utils";

const myName = "Kate";
const serverMessage = "Hello from the server";

beforeEach(() => {
  jest.spyOn(ApiService, "validateValues").mockResolvedValue(true);
  jest
    .spyOn(ApiService, "submitValues")
    .mockResolvedValue({ message: serverMessage });
});

describe("<App />", () => {
  describe("name entered is valid", () => {
    it("should submit the name entered to the API", async () => {
      const wrapper = mount(<App />);

      const input = wrapper.find('[name="name-input"]');
      input.simulate("change", { target: { value: myName } });

      const submitButton = wrapper.find("#submit-button");

      submitButton.simulate("submit");

      // doesn't work in enzyme because it does not simulate DOM behavior
      // the onClick of a type="submit" button does not trigger the form submit
      // submitButton.simulate("click");

      // act indicates that a hook (useEffect) will need to trigger
      await act(async () => {
        // flush out your promises
        await Promise.resolve();
      });

      // update the rendered component
      wrapper.update();

      console.log(wrapper.debug());

      const messageDisplay = wrapper.find("#server-message");
      expect(messageDisplay.text().includes(serverMessage.toUpperCase())).toBe(
        true
      );
    });
  });
});
