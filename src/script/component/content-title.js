class ContentTitle extends HTMLElement{
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
           
            :host {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            
            h1{
                color: var(--secondary-color);
                font-size: 60px;
                line-height: 1;
                margin-bottom: 10px;
            }
            
            h3{
                color: var(--secondary-color);
                font-size: 30px;
                font-weight: normal;
                margin-bottom: 10px;
            }
            
            a{
                background-color: var(--secondary-color);
                color: var(--primary-color);
                text-decoration: none;
                font-size: 1.5em;
                font-weight: 500;
                border-radius: 10px;
                line-height: 1;
                padding: 10px 18px;
                transition: 0.5s;
            }
            
            a:hover{
                background-color: var(--primary-color);
                color: var(--secondary-color);
            }
            </style>

            <h1>Spectrum</h1>
            <h3>Best place to explore movie for free</h3>
            <a href="#movie-list">Scroll Down</i></a> `
    }
}

customElements.define('content-title', ContentTitle);