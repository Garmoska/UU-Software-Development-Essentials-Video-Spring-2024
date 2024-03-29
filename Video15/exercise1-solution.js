// there are 26+1 characters
const ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const KEY = 1

function shiftLetter(letter, key) {
    const letterIndex = ALPHABET.indexOf(letter);
    let shiftedIndex = letterIndex + key;
    shiftedIndex = shiftedIndex % ALPHABET.length;
    if (shiftedIndex < 0) {
        shiftedIndex = ALPHABET.length + shiftedIndex;
    }
    return ALPHABET[shiftedIndex];
}

function encrypt(text, key) {
    let encryptedText = "";
    const textToEncrypt = text.toUpperCase();
    for (let i = 0; i < textToEncrypt.length; i++) {
        const originalLetter = textToEncrypt[i];
        const shiftedLetter = shiftLetter(originalLetter, key);
        //console.log(originalLetter + " >> " + shiftedLetter);
        encryptedText += shiftedLetter;
    }
    return encryptedText;
}

function decrypt(text, key) {
    let decryptedText = "";
    const textToDecrypt = text.toUpperCase();
    for (let i = 0; i < textToDecrypt.length; i++) {
        const originalLetter = textToDecrypt[i];
        const shiftedLetter = shiftLetter(originalLetter, -key);
        //console.log(originalLetter + " >> " + shiftedLetter);
        decryptedText += shiftedLetter;
    }
    return decryptedText;
}



let es = encrypt("mama", KEY);
console.log("encrypted string=" + es);
console.log("decrypted string=" + decrypt(es, KEY));

es = encrypt("xyz ", KEY);
console.log("encrypted string=" + es);
console.log("decrypted string=" + decrypt(es, KEY));

//for Video 16
/*
const encryptedText2 = "OLQFROQCZDVCERUQCLQWRCSRYHUWACLQCDCORJCFDELQCLQCNHQWXFNACDQGCZDVCUDLVHGCRQCWKHCIURQWLHUCSULPDULOACLQCLQGLDQDCKHCZDVCVHOICHGXFDWHGCDQGCEHFDPHCDCODZAHUCZKLJCSDUWACOHDGHUCLOOLQRLVCVWDWHCOHJLVODWRUCDQGCXVCFRQJUHVVPDQCIURPCLOOLQRLVCKHCUHWXUQHGCWRCKLVCVXFFHVVIXOCODZCSUDFWLFHCLQCVSULQJILHOGCLOOLQRLVCKHCZDVCDQJHUHGCEACWKHCNDQVDVCQHEUDVNDCDFWCZKLFKCRSHQHGCWKHCWHUULWRULHVCWRCVODYHUACFDXVLQJCKLPCWRCUHCHQWHUCSROLWLFVCKHCVRRQCEHFDPHCDCOHDGHUCRICWKHCQHZCUHSXEOLFDQCSDUWACKHCUHDFKHGCDCQDWLRQDOCDXGLHQFHCVHQDWHCFDPSDLJQCGHEDWHVCDJDLQVWCVWHSKHQCGRXJODVCOLQFROQCUDQCIRUCSUHVLGHQWCVZHHSLQJCWKHCQRUWKCWRCJDLQCYLFWRUA";
console.log(decrypt(encryptedText2, 3));
*/




