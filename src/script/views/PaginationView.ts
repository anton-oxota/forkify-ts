class PaginationView {
    private paginationContainer = document.querySelector(
        ".pagination"
    ) as HTMLDivElement;

    private createPageButton(type: "prev" | "next", page: number) {
        return `
            <button class="btn--inline pagination__btn--${type}" data-page="${page}">
                <svg class="search__icon">
                    <use href="imgs/icons.svg#icon-arrow-${
                        type === "prev" ? "left" : "right"
                    }"></use>
                </svg>
                <span>Page ${page}</span>
            </button>
        `;
    }

    public renderPageButtons(page: number, totalPages: number) {
        if (page === 1) {
            this.paginationContainer.innerHTML = this.createPageButton(
                "next",
                page + 1
            );
        } else if (page === totalPages) {
            this.paginationContainer.innerHTML = this.createPageButton(
                "prev",
                page - 1
            );
        } else {
            this.paginationContainer.innerHTML = `
            ${this.createPageButton("prev", page - 1)}
            ${this.createPageButton("next", page + 1)}
            `;
        }
    }

    public addPageClickHandler(handler: Function) {
        this.paginationContainer.addEventListener("click", (event) => {
            const target = event.target as Element;
            const button = target.closest("button");

            if (!button) return;

            const goToPage = +button.dataset.page!;
            handler(goToPage);
        });
    }
}

export default new PaginationView();
