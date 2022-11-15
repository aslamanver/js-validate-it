const assert = require("assert");
const validateIt = require("../src/validate-it");
// const gatewayValidations = require("../src/validations/gateway.json");

describe("---validationsTest---", function () {
  //
  it("#1 check from validation object", function () {
    //
    const validations = {
      amount: {
        required: { value: true, message: "required:message" },
        min: { value: 5, message: "min:message" },
        max: { value: 16, message: "max:message" },
        sun: { value: 0, message: "sun:message" },
      },
      mobile: {
        required: { value: true, message: "required:message" },
      },
      city: {
        max: { value: 16, message: "max:message" },
      },
    };

    const inputs = {};

    const result = validateIt(validations, inputs);

    assert.notEqual(result.amount.required, undefined);
    assert.notEqual(result.mobile.required, undefined);
    assert.equal(result.amount.city, undefined);
  });

  it("#2 check from json file validations", function () {
    //
    const validations = {
      amount: {
        min: { value: 5, message: "min:message" },
        max: { value: 16, message: "max:message" },
        sun: { value: 0, message: "sun:message" },
      },
    };

    const inputs = {
      amount: 4,
    };

    const result = validateIt(validations, inputs);

    assert.equal(result.amount.required, undefined);
    assert.notEqual(result.amount.min, undefined);
  });

  it("#3 is_retry", function () {
    //
    const validations = {
      payment_type: {
        required: {
          value: true,
          message: "payment_type:required:message_ya",
        },
      },
      is_retry: {
        required: {
          value: true,
          message: "{payment_type} is required",
        },
      },
    };

    const query = "{payment_type} is required";

    const params = {};
    let param = null;

    for (const letter of query) {
      if (letter == "{") {
        param = letter;
      } else if (letter == "}") {
        param += letter;
        const pureParam = param.replace(/[{}]/g, "").split(".");
        let obj = validations[pureParam[0]];
        for (const p of pureParam.filter((e, i) => i != 0)) {
          obj = obj[p];
        }
        params[param] = JSON.stringify(obj);
        param = null;
      } else if (param != null) {
        param += letter;
      }
    }

    console.log(params);

    const inputs = {
      payment_type: "onetime",
    };

    const result = validateIt(validations, inputs);

    // assert.equal(result.amount.required, undefined);
    // assert.notEqual(result.amount.min, undefined);
  });
});
