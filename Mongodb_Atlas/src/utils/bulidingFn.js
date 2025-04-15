// utils/bulidingFn.js
export const customResponse = (statusCode, message, path, data = null) => {
  return {
    statusCode,
    message,
    path,
    data,
  };
};

export const validationFunction = (message, path) => {
  return {
    statusCode: 400,
    message,
    path,
  };
};