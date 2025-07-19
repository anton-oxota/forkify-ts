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
}

export default new Components();
