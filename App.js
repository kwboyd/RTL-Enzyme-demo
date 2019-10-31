import React, { useState, useEffect } from "react";
import ApiService from "./api.service";
import Form from "./Form";
import Message from "./Message";

const App = () => {
  const [message, setMessage] = useState(null);
  const [formattedMessage, setFormattedMessage] = useState(null);

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

  useEffect(() => {
    if (message) {
      setFormattedMessage(message.toUpperCase());
    }
  }, [message]);

  return (
    <div>
      {formattedMessage && <Message message={formattedMessage} />}
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
