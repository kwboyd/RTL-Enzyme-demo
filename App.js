import React, { useState } from "react";
import { validateValues, submitValues } from "./api.service";
import Form from "./Form";
import Message from "./Message";

const App = () => {
  const [message, setMessage] = useState(null);

  const handleSubmit = async formValues => {
    try {
      const validData = await validateValues(formValues);
      if (validData) {
        const { message } = await submitValues(formValues);
        setMessage(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Message message={message} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
