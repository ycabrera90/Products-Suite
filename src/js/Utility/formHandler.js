import { validateCedula, validateDepartment, validateEmail, validateLastName, validateLocation, validateName } from "./inputsValidators";

export const formHandler = (domId) => {
  let form = document.getElementById(domId);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameInputValue = form.querySelector("input#NOMBRE").value;
    let lastNameInputValue = form.querySelector("input#APELLIDO").value;
    let emailInputValue = form.querySelector("input#E-MAIL").value;
    let dptoSelectValue = form.querySelector("select#Departamento").value;
    let locSelectValue = form.querySelector("select#Localidad").value;
    let ciInputValue = form.querySelector("input#CI").value;
    let checkboxValue = form.querySelector("input#acept").checked;

    if (!validateName(nameInputValue)) {
      alert("Su nombre debe tener al menos 2 caracteres");
      return
    }

    if (!validateLastName(lastNameInputValue)) {
      alert("Su apellido debe tener al menos 2 caracteres");
      return
    }

    if (!validateEmail(emailInputValue)) {
      alert("Su email debe tener el formato correcto");
      return
    }

    if (!validateDepartment(dptoSelectValue)) {
      alert("Debe seleccionar un departamento");
      return;
    }

    if (!validateLocation(locSelectValue)) {
      alert("Debe seleccionar una localidad");
      return;
    }

    if (!validateCedula(ciInputValue)) {
      alert("Introduzca u cedula sin puntos ni guiones");
      return;
    }

    if (!checkboxValue) {
        alert("Debe aceptar las bases y condiciones");
        return;
    }

    alert("Sus datos han sido enviados de forma correcta");
  });
};
