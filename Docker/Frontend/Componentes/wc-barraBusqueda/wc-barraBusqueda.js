// <wc-barraBusqueda></wc-barraBusqueda>
class WcBarraBusqueda extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    
  }
  connectedCallback() {
              //Se crea el shadow root
              const shadow = this.attachShadow({mode: 'open'});
              //se crea el contenedor del buscador y se le asignan atributos
              const contenedor = document.createElement('div');
              contenedor.id = 'autocomplete-container';
              //se crea el input que ira dentro del contenedor y se le asignan atributos
              let input = document.createElement('input');
              input.type ="text";
              input.autofocus = "true";
              input.name="autofocus sample";
              input.placeholder="search people";
              input.id="autocomplete-input";
              //Se crea el listado de sugerencias y atributos de este
              let ul=document.createElement('ul');
              ul.id= "autocomplete-results";
      
              //se crea el shadow Tree
              contenedor.appendChild(input);
              contenedor.appendChild(ul);
              shadow.appendChild(contenedor);
          
              
          function autocomplete(val) {
              var the_return = [];
       
              for (let i = 0; i < soloArreglo.length; i++) {
                  if (val === soloArreglo[i].slice(0, val.length)) {
                  the_return.push(soloArreglo[i]);
                  }
              }
          return the_return;
          }
              //se agregan los eventos 
              input.onkeyup = function(e) {
                  let input_val = this.value; // updates the variable on each ocurrence
                  let to_show = [];
                  if (input_val.length > 0) {
                    let autocomplete_results = ul;
                    autocomplete_results.innerHTML = '';
                    to_show = autocomplete(input_val);              
                    for (let i = 0; i < to_show.length; i++) {
                      autocomplete_results.innerHTML += '<li>' +to_show[i] + '</li>';
                
                    }
                    autocomplete_results.style.display = 'block';
                  } else {
                  let autocomplete_results = ul;
                    to_show = [];
                    autocomplete_results.innerHTML = '';
                  }
      
    
    }
 
    }
}
window.customElements.define('wc-barrabusqueda', WcBarraBusqueda);