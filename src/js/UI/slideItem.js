export const slideItems = (domId, products) => {
  let container = document.getElementById(domId);
  let content = container.innerHTML;
  
  products.map((item)=>{
    content += `
      <div class="slide-container">
            <section class="product-info">
                <h3>PRODUCT</h3>
                <h1>${item.identifier}</h1>
                <button>COMPRAR</button>
            </section>
            <section class="product-cost">
                <img class="img-small" src="./assets/images/gray-stain-small.svg">
                <img class="img-large" src="./assets/images/gray-stain-large.svg">
                <div class="cost-container">
                    <h3 class="currency">U$S</h3>
                    <div class="cost">
                    <h1 class="cost-value">${item.price.split('.')[0]}</h1>
                    <section class="plan">
                        <h3>.${item.price.split('.')[1]}</h3>
                        <h3>/ mes</h3>
                    </section>
                </div>
                </div>
            </section>
        </div>
      `;
  })

  container.innerHTML = content;
};
