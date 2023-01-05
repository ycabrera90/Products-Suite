export const customInput = (domId, label, placeholder, type) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
        <div class="custom-input">
            <label for="${label}" class="hidden">${label}</label>
            <input type="${
              type ? type : "text"
            }" id="${label}" placeholder="${placeholder}" />
            <p></p>
        </div>
    `;

  setTimeout(() => {
    let inputDOM = container.querySelector(`input#${label}`);

    // input change
    inputDOM.addEventListener("input", (e) => {
      const inputValue = e.target.value;

      // show the label only when the input is not empty
      const labelDOM = container.querySelector(`label[for="${label}"]`);
      if (inputValue === "") {
        labelDOM.classList.add("hidden");
      } else {
        labelDOM.classList.remove("hidden");
      }
    });

    // input focus
    inputDOM.addEventListener("focus", (e) => {
      inputDOM.parentElement.classList.remove("error");
      inputDOM.parentElement.lastElementChild.innerHTML = "";
      
      if(inputDOM.value !== ""){
        inputDOM.parentElement.firstElementChild.classList.remove("hidden");
      }
    });
  }, 10);
};
