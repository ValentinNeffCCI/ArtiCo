const optionResource = (option) => {
    if(!option) throw new HttpError("Aucune option trouvée", 404);
    return {
        id: option.id,
        value: option.value,
    }
}

module.exports = optionResource;
