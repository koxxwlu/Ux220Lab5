class JaydenElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 'star dust 3';

    }
}
customElements.define("x-koxx", JaydenElement);

class CenterElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;

    }
}
customElements.define("x-center", CenterElement);

class DateElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", DateElement);