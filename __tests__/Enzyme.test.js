import React from "react";
import { mount } from "enzyme";
import ApiService from "../api.service";
import App from "../App";

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

      submitButton.simulate("click");

      await Promise.resolve();
      wrapper.update();
      console.log(wrapper.debug());
      await Promise.resolve();
      wrapper.update();
      await Promise.resolve();
      wrapper.update();

      const messageDisplay = wrapper.find("#server-message");
      console.log(messageDisplay);
      expect(messageDisplay.text().includes(serverMessage)).toBe(true);
    });
  });
});
