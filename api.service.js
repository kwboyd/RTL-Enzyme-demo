const validateValues = () => {
  return new Promise(resolve => {
    resolve(true);
  });
};

const submitValues = () => {
  return new Promise(resolve => {
    resolve({ message: "hello from the other side" });
  });
};

export default {
  validateValues,
  submitValues
};
