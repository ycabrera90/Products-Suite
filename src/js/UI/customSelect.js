
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
      </div>
    `;

  // load the options based to the ref
  if (items && ref) {
    document.getElementById(ref).addEventListener("change", (e) => {
      content = `<option value="">${placeholder}</option>`;
      const selectedValue = e.target.value;
      if (selectedValue !== "") {
        items[e.target.value].forEach((item) => {
          content += `<option value="${item}">${item}</option>`;
        });
        document.getElementById(placeholder).innerHTML = content;
      }
    });
  }

  // remove the error class when the select is focused
  setTimeout(() => {
    container.querySelector(`select#${placeholder}`).addEventListener("focus", (e) => {
      e.target.parentElement.classList.remove("error");
    });
  }, 10);
};
