const optionResource = require("../option-resource.js");

const optionCollectionResource = (options) => {
    return options.map(o => optionResource(o));
}

module.exports = optionCollectionResource;
