const Roles = {
    visa: /^[4]\d{15}$/,
    ip: /(^(0\.0\.0\.0)$|^(((([1-9]|[1-9]\d|1\d\d)|(2[0-4]\d)|(25[0-5]))\.)(((\d|[1-9]\d|1\d\d)|(2[0-4]\d)|(25[0-5]))\.){2}((\d|[1-9]\d|1\d\d)|(2[0-4]\d)|(25[0-5])))$)/,
    mac: /^(([0-9]|[A-F]){2}-){5}([0-9]|[A-F]){2}$/
}

const validate = (valueToValidate, type) => {
    return Roles[type].test(valueToValidate);
}

export default validate;