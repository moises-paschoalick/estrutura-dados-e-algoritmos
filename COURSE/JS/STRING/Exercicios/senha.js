
// Resolução com REGEX
function verifyPasswordRegex(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#&]).{8,}$/;        
    return regex.test(password);    
}


function verifyPasswordRegex2(str) {
    const regex1 = /^.{8,}$/;
    const regex2 = /[a-zA-Z]/; 
    const regex3 = /\d/;  //[0-9] d minúsculo -> digio D maiúsculo -> não dígito
    const regex4 = /[@#&]/;
    
    return regex1.test(str) && regex2.test(str) && regex3.test(str) && regex4.test(str);    

}



console.log(verifyPasswordRegex2("amerca1@"));
console.log(verifyPasswordRegex2("amrca154682"));



// Resolução sem REGEX

function validatePassword(str) {
    // Forma normal conjuntiva (e)    
    
    if (str.length < 8) {
        return false;
    }
    if(!hastLetter(str)) {
        return false
    }

    if(!hastNumber(str)) {
        return false
    }

    if(!hastSpecialCharacter(str)) {
        return false
    }

    
    return true;
}

// Forma normal disjuntiva (ou)
function hastLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
            return true;
        }
    }
    return false;
}        


function hastNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] >= '0' && str[i] <= '9') {
            return true;
        }
    }
    return false;
}        

function hastSpecialCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '@' || str[i] === '#' || str[i] === '&') {
            return true;
        }
    }
    return false;
}        

//console.log(hastLetter("11"));
//console.log(validatePassword("amerca1@"));
//console.log(validatePassword("amerca154682"));