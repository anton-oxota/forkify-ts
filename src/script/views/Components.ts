import type { RecipeListData } from "../modules/searchResultModule";

class Components {
    public spinner() {
        return `
            <div class="spinner">
                <svg>
                    <use href="imgs/icons.svg#icon-loader"></use>
                </svg>
            </div>
        `;
    }

    public message(text: string) {
        return `
            <div class="message">
                <div>
                    <svg>
                        <use href="imgs/icons.svg#icon-smile"></use>
                    </svg>
                </div>
                <p>${text}</p>
            </div>
        `;
    }

    public error(text: string) {
        return `
            <div class="error">
                <div>
                    <svg>
                        <use href="imgs/icons.svg#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${text}</p>
            </div>
        `;
    }

    public createResipeListElement(data: RecipeListData) {
        const { id, image_url, publisher, title, isActive } = data;

        return `
                <li class="preview">
                    <a class="preview__link 
                     ${isActive ? "preview__link--active" : ""}
                     " data-id="${id}">
                        <figure class="preview__fig">
                            <img src="${image_url}" alt="Test" />
                        </figure>
                        <div class="preview__data">
                            <h4 class="preview__title">${title}</h4>
                            <p class="preview__publisher">${publisher}</p>
                        </div>
                    </a>
                </li>
            `;
    }
}

export default new Components();
