import {
  validateCedula,
  validateDepartment,
  validateEmail,
  validateLastName,
  validateLocation,
  validateName,
} from "./inputsValidators";

export const formHandler = (domId) => {
  let form = document.getElementById(domId);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameInput = form.querySelector("input#NOMBRE");
    let lastNameInput = form.querySelector("input#APELLIDO");
    let emailInput = form.querySelector("input#E-MAIL");
    let dptoSelect = form.querySelector("select#Departamento");
    let locSelect = form.querySelector("select#Localidad");
    let ciInput = form.querySelector("input#CI");

    let checkbox = form.querySelector("input#acept");

    if (!validateName(nameInput.value)) {
      //   alert("Su nombre debe tener al menos 2 caracteres");
      nameInput.parentElement.classList.add("error");
      return;
    }

    if (!validateLastName(lastNameInput.value)) {
      //   alert("Su apellido debe tener al menos 2 caracteres");
      lastNameInput.parentElement.classList.add("error");
      return;
    }

    if (!validateEmail(emailInput.value)) {
      //   alert("Su email debe tener el formato correcto");
      emailInput.parentElement.classList.add("error");
      return;
    }

    if (!validateDepartment(dptoSelect.value)) {
      //   alert("Debe seleccionar un departamento");
      dptoSelect.parentElement.classList.add("error");
      return;
    }

    if (!validateLocation(locSelect.value)) {
      //   alert("Debe seleccionar una localidad");
      locSelect.parentElement.classList.add("error");
      return;
    }

    if (!validateCedula(ciInput.value)) {
      //   alert("Introduzca u cedula sin puntos ni guiones");
      ciInput.parentElement.classList.add("error");
      return;
    }

    if (!checkbox.checked) {
    //   alert("Debe aceptar las bases y condiciones");
      checkbox.parentElement.classList.add("error");
      return;
    }

    alert("Sus datos han sido enviados de forma correcta");
  });
};
