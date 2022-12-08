/*
1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy visa kártyaszámot 
vár stringként, szóközök nélkül!   
A függvény egy `Boolean` értékben visszaadja,
 hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.
*/
const visaRegexp = /^[4]\d{15}$/;

const validateVisaCardNumber = (visaNumber) => {
    return visaRegexp.test(visaNumber);
}

export default validateVisaCardNumber;