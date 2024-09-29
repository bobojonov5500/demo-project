const setItem = (key, token) => {
  try {
    localStorage.setItem(key, token);
  } catch (error) {}
};

const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {}
};
const clearItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
};

export { setItem, getItem, clearItem };
