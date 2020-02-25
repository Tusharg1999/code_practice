 function  isValidName(name){
if(name==""){
    return false;
}
else{
    if(typeof name===String){
        name=name.trim();
        if(name.length>3){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
};
function hoursAttented(){

};
if(isValidName(123)){
    console.log("Valid String");
}
else{
    console.log("Invalid String");
    
}