class JaydenElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 'star dust';

    }
}
customElements.define("x-koxx", JaydenElement);

class CentreElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}
customElements.define("x-center", CentreElement);

class DateElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", DateElement);