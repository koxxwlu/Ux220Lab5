class JaydenElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = "Hi hi";

    }
}

customElements.define("x-koxx", JaydenElement);