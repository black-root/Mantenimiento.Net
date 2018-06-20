import AbstractResource from "../boundary/AbstractResource.js";

// <wc-barraticket></wc-barraticket>
class WcBarraticket extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

  }
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
        //Se aniaden los estilos al componente
            let style = document.createElement("style");
            //style.innerText = '@import "wc-barraticket.css";';
            style.innerText = '*{margin:0;padding:0;list-style:none;text-decoration:none;border:none;outline:0;font-family:Roboto,sans-serif}input{margin-bottom:20px;padding:10px 18px;box-sizing:border-box;border-width:1px;border-style:solid;border-color:gray;width:70%}#btnbarra{width:25%;float:right}#barratb{width:150%}';
            shadow.appendChild(style);
        //Se genera el cuerpo del componente
        let fondo = document.createElement('div');
        let fondotb = document.createElement('div');
        let fondotb2 = document.createElement('div');
        fondotb.id= 'barratb';
        shadow.appendChild(fondo);
        shadow.appendChild(fondotb);
        shadow.appendChild(fondotb2);
        let formulario = document.createElement('form');
        fondo.appendChild(formulario);

        //Se cargan las demás partes
        //Barra del formulario
          let barra = document.createElement('input');
          barra.placeholder='Ingrese el numero de ticket';
          barra.id = 'barra';
          barra.type = 'text';

        //Boton Buscar
          let boton = document.createElement('input');
          boton.type='button';
          boton.id='btnbarra';
          boton.value ='Buscar';

        formulario.appendChild(barra);
        formulario.appendChild(boton); 
        
        //Se obtiene el valor a buscar
        boton.addEventListener("click", ()=>{
          console.log("el valor de la barra es: "+shadow.getElementById('barra').value);
          //se manda al servidor se compara y se notifica si existe en la Base
          let conection = new AbstractResource();
          conection.findById('solicitud',shadow.getElementById('barra').value).then(data =>{
            if(data = shadow.getElementById('barra').value){
              console.log(data + ' Si existe en la base')
              let json='nada';
              //fondotb.appendChild(this.formInfo(data,json)); //prueba para añadir tabla-------------------------
              fondotb2.appendChild(this.CreateTableFromJSON());
            }
            else{
              console.log('Lo sentimos, no encontramos su solicitud');
            }
          })
          .catch((e)=>{console.log("Lo sentimos, no encontramos su solicitud")} );
        })

  }
 
  formInfo(idticket, jsonticket){
 
  // Crea un elemento <table> y un elemento <tbody>
  let tabla   = document.createElement("table");
  let tblBody = document.createElement("tbody");
  //Crea las cabeceras de la tabla
  let tr_th = document.createElement('tr');
  let th1 = document.createElement('th');
  th1.id='pk_idMantenimientoDetalle';
  th1.innerText = 'Id Mantenimiento';
  let th2 = document.createElement('th');
  th2.id='fecha_DATE';
  th2.innerText = 'Fecha';
  let th3 = document.createElement('th');
  th3.id='pk_ordenTrabajo';
  th3.innerText = 'Orden de Trabajo'
  let th4 = document.createElement('th');
  th4.id='pk_idEstado';
  th4.innerText= 'Estado';
  let th5 = document.createElement('th');
  th5.id='pk_idTipoProcedimiento';
  th5.innerText = 'Tipo Procedimiento';
  let th6 = document.createElement('th');
  th6.id='pk_idPaso';
  th6.innerText = 'Id Paso';
  let th7 = document.createElement('th');
  th7.id='pk_diagnosticoParte';
  th7.innerHTML = 'Parte del Diagnostico';
  let th8 = document.createElement('th');
  th8.id='fk_EquipoDetalle';
  th8.innerHTML = 'Detalle de Equipo';
  
  tabla.appendChild(tblBody)
  tr_th.appendChild(th1);
  tr_th.appendChild(th2);
  tr_th.appendChild(th3);
  tr_th.appendChild(th4);
  tr_th.appendChild(th5);
  tr_th.appendChild(th6);
  tr_th.appendChild(th8);
  tr_th.appendChild(th7);
  tblBody.appendChild(tr_th);
  console.log(idticket+ 'desde el forminfo');
  return tabla;
  }
  
  CreateTableFromJSON() {
    console.log('FromJSON');
    myBooks = [
        {
            "Book ID": "1",
            "Book Name": "Computer Architecture",
            "Category": "Computers",
            "Price": "125.60"
        },
        {
            "Book ID": "2",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00"
        },
        {
            "Book ID": "3",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.createElement('div');
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    return divContainer;
    }

}

window.customElements.define('wc-barraticket', WcBarraticket);