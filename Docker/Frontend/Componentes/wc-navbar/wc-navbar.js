// import from "./"
class Navbar extends HTMLElement{
    constructor(){
        super();
        this._usertype =null;;
        this._seccionA = null;
        this._seccionB = null;
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});
        //Se aniaden los estilos al componente
            let style = document.createElement("style");
            //style.innerText = '@import "wc-navbar.css";';
            style.innerText = "*{margin: 0;padding: 0;list-style: none;text-decoration: none;border: none;outline: none;}div{height: 4em;padding: 0;background-color: rgb(77, 22, 22);font-family: 'Roboto', sans-serif;width: 100%;display: inline-block;}.nav-logo, img{width: 18em;padding: 8px;}ul{list-style: none;width: 100%;margin-top: -65px;}li{display:inline-block;margin-left: 2%;padding-top: 1em;padding-bottom: 1em;}li:hover{background-color: tomato;border-radius: 10px;}li:first-child{margin-left: 45%;}a{color: rgb(255, 255, 255);text-decoration: none;padding: 10px;}";
            shadow.appendChild(style);
        //se agrega fontAwesome para agregar los iconos
            let font = document.createElement('link');
            font.rel = 'stylesheet';
            font.href = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';
            font.integrity = 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp';
            font.crossOrigin = 'anonymous';
            shadow.appendChild(font);
        //cuerpo para el nav
            let div =document.createElement('div');
            div.id='navegador';
            shadow.appendChild(div);
        // Estructura del nav
            //Logo
                let a = document.createElement('a');
                let logo = document.createElement('img');
                logo.src='logo.PNG';
                a.className = 'nav-logo';
                a.appendChild(logo);
                
                if(this.getAttribute('usertype')=='1'){
                    a.href = 'index.html'; //Direccion de inicio
                    div.appendChild(a);
                }else if(this.getAttribute('usertype')=='0'){
                    a.href = 'index2.html'; //Direccion de inicio
                    div.appendChild(a);
                }
        //Se decide el tipo de menu segun el usuario (cliente o interno)
            if(this.getAttribute('usertype')=='1'){
                div.appendChild(this.paraClientes());
            }else if(this.getAttribute('usertype')=='0'){
                div.appendChild(this.paraInternos());
            }else{
                div.appendChild(this.paraClientes());
            }
    }
    paraClientes(){
        //opciones de navegacion para clientes
            let ul= document.createElement('ul');
        //crear solicitud
            let li_crearSoli = document.createElement('li');
            let a_cs = document.createElement('a');
            a_cs.innerHTML = '<i class="fas fa-briefcase"></i> Crear solicitud';
            a_cs.href = 'index.html' //pagina para crear solicitud
            li_crearSoli.appendChild(a_cs);
            ul.appendChild(li_crearSoli);
        //Seguimiento de ticket
            let li_Segui = document.createElement('li');
            let a_s = document.createElement('a');
            a_s.innerHTML = '<i class="fas fa-wrench"></i> Estado del Mantenimiento';
            a_s.href = 'EstadoMantenimiento.html' //pagina para Estado de mantenimiento
            li_Segui.appendChild(a_s);
            ul.appendChild(li_Segui);
        //Historial
            let li_histo = document.createElement('li');
            let a_h = document.createElement('a');
            a_h.innerHTML = '<i class="fas fa-history"></i> Historial';
            a_h.href = 'historial.html' //pagina consultar historial
            li_histo.appendChild(a_h);
            ul.appendChild(li_histo);
        //Cerrar Sesion
            let li_close = document.createElement('li');
            let a_cl = document.createElement('a');
            a_cl.innerHTML = '<i class="fas fa-power-off"></i> Cerrar Sesión';
            a_cl.href = '#' //boton para terminar sesion
            li_close.appendChild(a_cl);
            ul.appendChild(li_close);

         return ul;
    }
    paraInternos(){
        //opciones de navegacion para clientes
        let ul= document.createElement('ul');
        //Solicitudes pendientes
            let li_crearSoli = document.createElement('li');
            let a_cs = document.createElement('a');
            a_cs.innerHTML = '<i class="far fa-clipboard"></i> Solicitudes Pendientes';
            //a_cs.innerText = 'Solicitudes Pendientes';
            a_cs.href = 'index2.html' //pagina para ver solicitudes pendientes
            li_crearSoli.appendChild(a_cs);
            ul.appendChild(li_crearSoli);
        //Mantenimiento en progreso
            let li_Segui = document.createElement('li');
            let a_s = document.createElement('a');
            a_s.innerHTML = '<i class="fas fa-boxes"></i> Mis Mantenimientos';
            //a_s.innerText = 'Mis Mantenimientos';
            a_s.href = 'mismantenimientos.html' //pagina para mostrar y dar avances al mantenimiento
            li_Segui.appendChild(a_s);
            ul.appendChild(li_Segui);
        //Historial
            let li_histo = document.createElement('li');
            let a_h = document.createElement('a');
            a_h.innerHTML = '<i class="fas fa-history"></i> Historial';
            //a_h.innerText = 'Historial';
            a_h.href = 'historial2.html' //pagina consultar historial
            li_histo.appendChild(a_h);
            ul.appendChild(li_histo);
        //Cerrar Sesion
            let li_close = document.createElement('li');
            let a_cl = document.createElement('a');
            a_cl.innerHTML = '<i class="fas fa-power-off"></i> Cerrar Sesión';
            //a_cl.innerText = 'Cerrar Sesión';
            a_cl.href = '#' //boton para terminar sesion
            li_close.appendChild(a_cl);
            ul.appendChild(li_close);

         return ul;
    }
}
window.customElements.define('wc-navbar',Navbar);
