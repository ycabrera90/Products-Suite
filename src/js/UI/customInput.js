export const customInput = (domId, label, placeholder, type) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
        <div class="custom-input">
            <label for="${label}">${label}</label>
            <input type="${
              type ? type : "text"
            }" id="${label}" placeholder="${placeholder}" />
        </div>
    `;
};
