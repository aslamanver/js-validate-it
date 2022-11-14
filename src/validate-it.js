const validationFunctions = require("./validation-functions");

function validateIt(validations, inputs) {
  // Result is the return value, if there is no error this will return empty
  const result = {};

  // Loop through the defined validations array
  for (const validationInputName of Object.keys(validations)) {
    // Check the input value is found on the defined validation entry || assign null
    const inputValue = inputs[validationInputName] || null;

    // Get the current input validation from the key
    const inputValidations = validations[validationInputName];

    // Check input value is empty and it's not in required condition, then continue the loop
    if (inputValue === null && !inputValidations["required"]) {
      continue;
    }

    // Dive into the all the defined validations of the validation key
    for (const inputValidationKey of Object.keys(inputValidations)) {
      // Get the validation object of the loop entry
      const inputValidation = inputValidations[inputValidationKey];

      // Virtually create a function from the validation name, ex: requiredValidation
      const validationFunc = validationFunctions[`${inputValidationKey}Validation`];

      // If the function found and it returns true then we continue this loop
      if (validationFunc !== undefined && validationFunc(inputValue, inputValidation)) {
        continue;
      }

      // We add the validation object into the result object as it's not validated successfully
      result[validationInputName] = {
        ...result[validationInputName],
        [inputValidationKey]: inputValidation,
      };
    }
  }

  console.log("\nresult", result);

  return result;
}

module.exports = validateIt;
