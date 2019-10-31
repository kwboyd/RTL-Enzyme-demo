export const validateValues = () => {
  return new Promise(resolve => {
    resolve(true);
  });
};

export const submitValues = () => {
  return new Promise(resolve => {
    resolve({ message: "hello from the other side" });
  });
};
