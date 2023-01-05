export function validateName(name) {
  return name.length >= 2;
}

export function validateLastName(name) {
  return name.length >= 2;
}

export function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

export function validateDepartment(department) {
  return department !== "";
}

export function validateLocation(location) {
  return location !== "";
}

export function validateCedula(ci) {
  if (ci === "") return false;

  var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  var suma = 0;
  var difCoef = parseInt(arrCoefs.length - ci.length);
  for (var i = ci.length - 1; i > -1; i--) {
    var dig = ci.substring(i, i + 1);
    var digInt = parseInt(dig);
    var coef = arrCoefs[i + difCoef];
    suma = suma + digInt * coef;
  }
  var result = false;
  if (suma % 10 === 0) {
    result = true;
  }
  return result;
}
