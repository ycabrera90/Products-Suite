export const customCheckbox = (domId, label) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
      <div class="custom-ckeckbox">
        <input type="checkbox" id="acept">
        <label for="acept">${label}</label>
      </div>
    `;

  // remove the error class when the checkbox is focused
  setTimeout(() => {
    container.querySelector(`input#acept`).addEventListener("focus", (e) => {
      e.target.parentElement.classList.remove("error");
    });
  }, 10);
};
