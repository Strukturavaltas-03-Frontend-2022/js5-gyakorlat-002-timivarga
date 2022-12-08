/*2. Írj egy függvényt `validateIPAddress`, ami paraméterként egy IPv4 címet vár stringként!   
A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott IP cím megfelelő formátumú e, vagy sem.
*/

const IPv4Regexp = /(^(0\.0\.0\.0)$|^(((([1-9]|[1-9]\d|1\d\d)|(2[0-4]\d)|(25[0-5]))\.)(((\d|[1-9]\d|1\d\d)|(2[0-4]\d)|(25[0-5]))\.){2}((\d|[1-9]\d|1\d\d)|(2[0-4]\d)|(25[0-5])))$)/;

const validateIPAddress = (IPv4Number) => {
    return IPv4Regexp.test(IPv4Number);
}

export default validateIPAddress;