import React, { useState } from "react";
import ApiService from "./api.service";
import Form from "./Form";
import Message from "./Message";

const App = () => {
  const [message, setMessage] = useState(null);

  const handleSubmit = async formValues => {
    try {
      const validData = await ApiService.validateValues(formValues);
      if (validData) {
        const { message } = await ApiService.submitValues(formValues);
        setMessage(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {message && <Message message={message} />}
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
