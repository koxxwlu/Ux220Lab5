class ElementOne extends HTMLElement {
    connectedCallback(){
        this.innerHTML = "Hi hi"

    }
}

customElements.define("x-rich", RichElement);