export const isEmail = function (email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };
  export const isPhone = function (number) {
    let phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return phoneRegex.test(number);
  };

 
  export const isAnswer = function(option){
    let options= ["A","B","C","D"]
        if(!(options.includes(option))){
          return false
        }
   return true
  }
  