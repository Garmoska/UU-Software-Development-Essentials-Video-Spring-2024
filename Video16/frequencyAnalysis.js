const ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const encryptedText = "OLQFROQCZDVCERUQCLQWRCSRYHUWACLQCDCORJCFDELQCLQCNHQWXFNACDQGCZDVCUDLVHGCRQCWKHCIURQWLHUCSULPDULOACLQCLQGLDQDCKHCZDVCVHOICHGXFDWHGCDQGCEHFDPHCDCODZAHUCZKLJCSDUWACOHDGHUCLOOLQRLVCVWDWHCOHJLVODWRUCDQGCXVCFRQJUHVVPDQCIURPCLOOLQRLVCKHCUHWXUQHGCWRCKLVCVXFFHVVIXOCODZCSUDFWLFHCLQCVSULQJILHOGCLOOLQRLVCKHCZDVCDQJHUHGCEACWKHCNDQVDVCQHEUDVNDCDFWCZKLFKCRSHQHGCWKHCWHUULWRULHVCWRCVODYHUACFDXVLQJCKLPCWRCUHCHQWHUCSROLWLFVCKHCVRRQCEHFDPHCDCOHDGHUCRICWKHCQHZCUHSXEOLFDQCSDUWACKHCUHDFKHGCDCQDWLRQDOCDXGLHQFHCVHQDWHCFDPSDLJQCGHEDWHVCDJDLQVWCVWHSKHQCGRXJODVCOLQFROQCUDQCIRUCSUHVLGHQWCVZHHSLQJCWKHCQRUWKCWRCJDLQCYLFWRUA";

function frequencyAnalysisRoutines(encryptedText){
    const frequency = [];
    for(let i =0; i < ALPHABET.length; i++){
        frequency[ALPHABET[i]] = 0;
    }

    for(let i = 0; i < encryptedText.length; i++){
        const letter = encryptedText[i];
        frequency[letter] = frequency[letter] + 1;
    }
    //    frequency => [key -> value]
    for(const[key, value] of Object.entries(frequency)){
        console.log(key + " >> " + value);        
    }
}

frequencyAnalysisRoutines(encryptedText);
