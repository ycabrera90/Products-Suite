
export const customSelect = (domId, placeholder, items, ref) => {
  let container = document.getElementById(domId);
  let content = ""

  if (items && !ref) {
    Object.entries(items).forEach(([key, ]) => {
      content += `<option value="${key}">${key}</option>`
    });
  } 

  container.innerHTML += `
      <div class="custom-select">
        <select id="${placeholder}">
          <option value="">${placeholder}</option>
          ${content}
        </select>
        <p></p>
      </div>
    `;

  // load the options based to the ref
  if (items && ref) {
    container.querySelector(`#${ref}`).addEventListener("change", (e) => {
      content = `<option value="">${placeholder}</option>`;
      const selectedValue = e.target.value;
      if (selectedValue !== "") {
        items[selectedValue].forEach((item) => {
          content += `<option value="${item}">${item}</option>`;
        });
        container.querySelector(`#${placeholder}`).innerHTML = content;
      }
    });
  }

  // remove the error class when the select is focused
  setTimeout(() => {
    container.querySelector(`select#${placeholder}`).addEventListener("focus", (e) => {
      const selectDOM = e.target;
      selectDOM.parentElement.classList.remove("error");
      selectDOM.parentElement.lastElementChild.innerHTML = "";
    });
  }, 10);
};
