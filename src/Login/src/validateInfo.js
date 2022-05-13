export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'enter the phone Number';
    } else if (values.password.length < 6) {
      errors.password = ' Number needs to be 10 characters ';
    }
  
    if (!values.password2) {
      errors.password2 = 'Enter The Query';
    } 
    return errors;
  }