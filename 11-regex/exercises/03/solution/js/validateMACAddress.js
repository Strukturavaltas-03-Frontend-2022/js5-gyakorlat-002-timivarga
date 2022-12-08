/*3. Írj  egy függvényt `validateMACAddress`, ami paraméterként egy MAC címet vár stringként!   
A függvény egy `bollean` értékben visszaadja, hogy a paraméterként megadott MAC cím megfelelő formátumú e, vagy sem.
*/

const MACRegexp = /^(([0-9]|[A-F]){2}-){5}([0-9]|[A-F]){2}$/;

const validateMACAddress = (MACAddress) => {
    return MACRegexp.test(MACAddress);
};

export default validateMACAddress;