export const cardArticle = (domId, items) => {
    let container = document.getElementById(domId);
    let content = container.innerHTML;

    items.map((item) => {
        content += `
            <article class="card">
                <div class="image"></div>
                <div class="content">
                    <h2 class="title">${item.title}</h2>
                    <p class="description">${item.description}</p>
                </div>
            </article>
        `;
    });

    container.innerHTML = content;
  };
  