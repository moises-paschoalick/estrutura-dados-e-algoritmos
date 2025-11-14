/*
// Resolução com REGEX
function verifyPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#&]).{8,}$/;
        
    return regex.test(password);    
}


console.log(verifyPassword("amerca1@"));
console.log(verifyPassword("amrca154682"));
*/


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
console.log(validatePassword("amerca1@"));
console.log(validatePassword("amerca154682"));