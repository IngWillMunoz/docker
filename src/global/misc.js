const typeValidation = (value, type) => {
    if ((value == null) || (value == Math)) {
        return false;
    }
    return (typeof value == type);
}

module.exports = typeValidation;
