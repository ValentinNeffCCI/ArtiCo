const inputResource = require("../input-resource.js");

const inputCollectionResource = (inputs) => {
    return inputs.map(i => inputResource(i));
}

module.exports = inputCollectionResource;
