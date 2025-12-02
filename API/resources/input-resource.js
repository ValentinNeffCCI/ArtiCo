const optionResource = require("./option-resource.js");

const inputResource = (input, options = false) => {
    return {
        id: input.id,
        name: input.name,
        type: input.type,
        required: input.required,
        options: options ? input.options.map(option => optionResource(option)) : false
    }
}

module.exports = inputResource;
