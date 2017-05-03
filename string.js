var exports = module.exports = {};

function PasswordMessage(m){
    let this.name = "Password Message";
    let this.message = m;
}
function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
        if(unicode <= max && unicode >= min){
            return true;
        }
        else{
            return false;
        }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
    let hasUpper = false;
    try{
        for(i = 0; i < str.length; i++){
            if(str[i] >= 65 && str[i] <= 90){
                return hasUpper = true;
                throw new PasswordMessage("Has an uppercase character")
            }
            else{
                throw new PasswordMessage("Does not have an uppercase character")
            }
        }
    }
    catch (e){
        console.log(e.name+""+e.message);
        return hasUpper;
}


exports.containsLower =function(str){
    let hasLower = false;
    try{
        for(i = 0; i <str.length; i++){
            if(str[i] >= 97 && str[i] <= 122){
                return hasLower = true;
                throw new PasswordMessage("Has a lowercase character");
            }
            else{
                throw new PasswordMessage("Does not have a lowercase character");
            }
        }
    }
    catch (e){
        console.log(e.name+""e.message);
        return hasLower;
    }
}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
