class Example {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        this.htmlElement.innerHTML = "<h1>It's Alive!</h1>";

        this.handleClick = this.handleClick.bind(this);
        this.htmlElement.addEventListener('click', this.handleClick);
    }

    handleClick() {
        this.htmlElement.children[0].innerText = "Ouch";
    }
}

export default Example;
