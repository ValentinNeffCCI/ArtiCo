const userResource = require("../user-resource.js");

const userCollectionResource = (users) => {
    return users.map(user => userResource(user));
}

module.exports = userCollectionResource;
