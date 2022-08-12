export const useChange = (handleIsOkay, name) => {
  const handleState = (isOkay, value) => {
    handleIsOkay((state) => {
      const form = {
        status: isOkay,
        data: value,
      };
      const newState = { ...state, [name]: form };
      console.log('state2', newState);
      return newState;
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const isValid = value.length >= 1;
    if (isValid) {
      handleState(true, value);
      return;
    }
    handleState(false, value);
  };
  return [
    handleChange,
  ];
};
