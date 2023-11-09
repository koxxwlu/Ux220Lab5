class ElementOne extends HTMLElement {
    connectedCallback(){
        this.innerHTML = "Hi hi"

    }
}

customElements.ddefine("x-rich", RichElement);