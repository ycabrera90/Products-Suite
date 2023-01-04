export const customCheckbox = (domId, label) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
      <div class="custom-ckeckbox">
        <input type="checkbox" id="scales" name="scales" checked>
        <label for="scales">${label}</label>
      </div>
    `;
};
