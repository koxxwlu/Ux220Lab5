class JaydenElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 'I suggest an immediate test of the weapon, failure will find you explaining why to a, far less patient audience.';

    }
}

customElements.define("x-koxx", JaydenElement);