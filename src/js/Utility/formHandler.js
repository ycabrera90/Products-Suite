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
      nameInput.parentElement.classList.add("error");
      nameInput.parentElement.firstElementChild.classList.add("hidden");
      nameInput.parentElement.lastElementChild.textContent =
        "Su nombre debe tener al menos 2 caracteres";
      return;
    }

    if (!validateLastName(lastNameInput.value)) {
      lastNameInput.parentElement.classList.add("error");
      lastNameInput.parentElement.firstElementChild.classList.add("hidden");
      lastNameInput.parentElement.lastElementChild.textContent =
        "Su apellido debe tener al menos 2 caracteres";
      return;
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.parentElement.classList.add("error");
      emailInput.parentElement.firstElementChild.classList.add("hidden");
      emailInput.parentElement.lastElementChild.textContent =
        "Su email debe tener el formato correcto";
      return;
    }

    if (!validateDepartment(dptoSelect.value)) {
      dptoSelect.parentElement.classList.add("error");
      dptoSelect.parentElement.lastElementChild.textContent =
        "Debe seleccionar un departamento";
      return;
    }

    if (!validateLocation(locSelect.value)) {
      locSelect.parentElement.classList.add("error");
      locSelect.parentElement.lastElementChild.textContent =
        "Debe seleccionar una localidad";
      return;
    }

    if (!validateCedula(ciInput.value)) {
      ciInput.parentElement.classList.add("error");
      ciInput.parentElement.firstElementChild.classList.add("hidden");
      ciInput.parentElement.lastElementChild.textContent =
        "Introduzca su cedula sin puntos ni guiones";
      return;
    }

    if (!checkbox.checked) {
      checkbox.parentElement.classList.add("error");
      checkbox.parentElement.parentElement.lastElementChild.textContent =
        "Debe aceptar las bases y condiciones";
      return;
    }

    alert("Sus datos han sido enviados de forma correcta");
  });
};
