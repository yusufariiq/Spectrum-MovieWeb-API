class NavBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    
  get value() {
    return this.querySelector('#searchButtonElement').value;
  }

    render(){
        this.innerHTML =`
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;   
            }

            nav-bar{
                background-color: var(--primary-color);
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                height: 70px;
                padding: 0 100px;
                color: var(--secondary-color);
            }
            
            nav-bar .logo{
                font-size: 1.5em;
                font-weight: 700;
                letter-spacing: -1px;
            }
            
            nav-bar .logo a{
                text-decoration: none;
                color: var(--secondary-color);
            }

            nav-bar .nav-items{
                display: flex;
                flex: 1;
                list-style: none;
                padding: 0 0 0 40px;
            }
            
            nav-bar form{
                display: flex;
                height: 35px;
                background-color: var(--secondary-color);
                padding: 2px;
                min-width: 18%!important;
                border: 1px solid rgba(155, 155, 155, 0.2);
                border-radius: 5px;
            }
            
            nav-bar form .search{
                height: 100%;
                width: 100%;
                padding: 0 10px;
                color: var(--primary-color);
                background: none;
                font-weight: 500;
                border: none;
            }
            
            nav-bar form button{
                padding: 0 15px;
                background-color: var(--secondary-color);
                color: var(--primary-color);
                cursor: pointer;
                font-size: 17px;
                border-radius: 3px;
                border: none;
            }

            nav-bar .search-icon, nav-bar .cancel-icon{
                width: 40px;
                color: var(--secondary-color);
                text-align: center;
                margin: 0 50px;
                font-size: 18px;
                cursor: pointer;
                display: none;
            }
        </style>

        <div class="logo">
            <a href="/">
                <h2>SPECTRUM</h2>
            </a>
        </div>
        <div class="search-icon"><span class="fas fa-search"></span></div>
        <div class="cancel-icon"><span class="fas fa-times"></span></div>
        <form id="form">
            <input type="text" placeholder="Search" id="search" class="search">
            <button id="searchButtonElement" type="submit" class="fas fa-search"></button>
        </form>
        `
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('nav-bar', NavBar);