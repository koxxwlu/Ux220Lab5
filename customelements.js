class JaydenElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 'I suggest an immediate test of the weapon, failure will find you explaining why to a, far less patient audience.';

    }
}
customElements.define("x-koxx", JaydenElement);

class CentreElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}
customElements.define("x-centre", CentreElement);

class DateElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", DateElement);