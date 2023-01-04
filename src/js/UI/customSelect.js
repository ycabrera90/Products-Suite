export const customSelect = (domId, placeholder, items) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
      <div class="custom-select">
        <select>
          <option value="">${placeholder}</option>
          <option value="10">Ten</option>
          <option value="20">Twenty</option>
          <option value="30">Thirty</option>
        </select>
      </div>
    `;
};
