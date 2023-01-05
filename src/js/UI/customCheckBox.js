export const customCheckbox = (domId, label) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
      <div class="custom-ckeckbox">
        <section class="checkbox">
          <input type="checkbox" id="acept">
          <label for="acept">${label}</label>
        </section>
        <p class="error-message"></p>
      </div>
    `;

  // remove the error class when the checkbox is focused
  setTimeout(() => {
    container.querySelector(`input#acept`).addEventListener("focus", (e) => {
      e.target.parentElement.classList.remove("error");
      e.target.parentElement.parentElement.lastElementChild.innerHTML = "";
    });
  }, 10);
};
