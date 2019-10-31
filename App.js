import React, { useState, useEffect } from "react";
import ApiService from "./api.service";
import Form from "./Form";
import Message from "./Message";

const App = () => {
  const [message, setMessage] = useState(null);
  const [formattedMessage, setFormattedMessage] = useState(null);

  const handleSubmit = async formValues => {
    const { message } = await ApiService.submitValues(formValues);
    setMessage(message);
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
