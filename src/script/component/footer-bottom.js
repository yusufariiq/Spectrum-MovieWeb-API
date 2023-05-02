class Footer extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML=`
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
                
            :host{
                display: block;
                background-color: #1e1e1e;
                color: #f7f7f7;
                text-align: center;
            }

            h1{
                padding-top: 30px;
            }

            p{
                padding-bottom: 30px;
            }
            </style>

            <h1>SPECTRUM</h1>
            <p>&copy; 2022 All Right Reserved</p>`
    }
}

customElements.define('footer-bottom', Footer);