const validationFunctions = {
  //
  requiredValidation: function (inputValue, inputValidation) {
    return (
      inputValidation.value &&
      inputValue !== null &&
      inputValue.toString().trim().length > 0
    );
  },

  minLengthValidation: function (inputValue, inputValidation) {
    return inputValue.toString().trim().length >= inputValidation.value;
  },

  maxLengthValidation: function (inputValue, inputValidation) {
    return inputValue.toString().trim().length <= inputValidation.value;
  },

  minValidation: function (inputValue, inputValidation) {
    return +(inputValue || "").toString().trim() >= inputValidation.value;
  },

  maxValidation: function (inputValue, inputValidation) {
    return +(inputValue || "").toString().trim() <= inputValidation.value;
  },
};

module.exports = validationFunctions;
