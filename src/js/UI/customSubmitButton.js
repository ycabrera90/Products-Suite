export const customSubmitButton = (domId, label) => {
    let container = document.getElementById(domId);
    container.innerHTML += `
        <button type="submit" class="custom-subit-button">${label}</button>
      `;
  };
  