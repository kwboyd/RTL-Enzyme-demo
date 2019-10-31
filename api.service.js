const submitValues = () => {
  return new Promise(resolve => {
    resolve({ message: "hello from the other side" });
  });
};

export default {
  submitValues
};
