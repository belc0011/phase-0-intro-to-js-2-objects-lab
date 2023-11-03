const employee = {
    name: "Bob",
    streetAddress: "123 Main St",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newobj = {...obj}
    newobj[key] = value;
    return newobj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newobj = {...obj};
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
