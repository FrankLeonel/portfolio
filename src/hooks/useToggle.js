const { useState } = require("react");

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [value, () => setValue(!value)];
};

export default useToggle;
