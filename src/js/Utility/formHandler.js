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
      nameInput.parentElement.lastElementChild.textContent =
        "Su nombre debe tener al menos 2 caracteres";
      nameInput.parentElement.firstElementChild.classList.add("hidden");
      return;
    }

    if (!validateLastName(lastNameInput.value)) {
      lastNameInput.parentElement.classList.add("error");
      lastNameInput.parentElement.lastElementChild.textContent =
        "Su apellido debe tener al menos 2 caracteres";
      lastNameInput.parentElement.firstElementChild.classList.add("hidden");
      return;
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.parentElement.classList.add("error");
      emailInput.parentElement.lastElementChild.textContent =
        "Su email debe tener el formato correcto";
      emailInput.parentElement.firstElementChild.classList.add("hidden");
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
      ciInput.parentElement.classList.add("error");
      ciInput.parentElement.lastElementChild.textContent =
        "Introduzca u cedula sin puntos ni guiones";
      ciInput.parentElement.firstElementChild.classList.add("hidden");
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
