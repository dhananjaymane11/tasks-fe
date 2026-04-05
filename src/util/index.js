export const addDataToArray = (array, data) => {
  return [...array, data];
};

export const removeDataFromArray = (array, id) => {
  return array.filter((item) => item._id !== id);
};

export const updateDataInArray = (array, id, data) => {
  return array.map((item) => (item._id === id ? { ...item, ...data } : item));
};
