const validateName = (name)=>{
    const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/)
    return nameRegex.test(name);
  }
  
  const validateEmail = (email)=>{
    // console.log("validateEmail", email)
    const reg = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  
    return reg.test(email);
  }
  
  const validatePassword = (password)=>{
      // console.log("validatePassword", password)
    const passwordRegex = new RegExp("^(?=.*[0-9])"
                         + "(?=.*[a-z])(?=.*[A-Z])"
                         + "(?=.*[@#$%^&+=])"
                         + "(?=\\S+$).{8,20}$");
  
    // console.log(passwordRegex.test(password));
    return passwordRegex.test(password);
  }
  
  module.exports = {
    validateName,
    validateEmail,
    validatePassword
  }