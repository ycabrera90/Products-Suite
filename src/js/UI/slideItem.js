export const slideItems = (domId, label) => {
  let container = document.getElementById(domId);
  container.innerHTML += `
  <div class="slide-container">
        <section class="product-info">
            <h3>PRODUCT</h3>
            <h1>TW0</h1>
            <button>COMPRAR</button>
        </section>
        <section class="product-cost">
            <img class="img-small" src="./assets/images/gray-stain-small.svg">
            <img class="img-large" src="./assets/images/gray-stain-large.svg">
            <div class="cost-container">
                <h3 class="currency">U$S</h3>
                <div class="cost">
                <h1 class="cost-value">99</h1>
                <section class="plan">
                    <h3>.50</h3>
                    <h3>/ mes</h3>
                </section>
            </div>
            </div>
        </section>
    </div>
  `;
};
