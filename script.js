document.addEventListener('DOMContentLoaded', function () {

    const carrito = document.querySelector('#carrito');

    const elementos1 = document.querySelector('#lista-1');

    const elementos2 = document.querySelector('#lista-2');

    const lista = document.querySelector('#lista-carrito tbody');

    const vaciarcarritoBtn = document.querySelector('#vaciar-carrito');

 

    cargarEventListeners();

 

    function cargarEventListeners() {

      elementos1.addEventListener('click', comprarElemento);

      elementos2.addEventListener('click', comprarElemento);

      vaciarcarritoBtn.addEventListener('click', vaciarcarrito);

    }

 

    function comprarElemento(e) {

      e.preventDefault();

      if (e.target.classList.contains('agregar-carrito')) {

        const elemento = e.target.parentElement.parentElement;

        leerDatosElemento(elemento);

      }

    }

 

    function leerDatosElemento(elemento) {

      const infoElemento = {

        imagen: elemento.querySelector('img').src,

        titulo: elemento.querySelector('h3').textContent,

        precio: elemento.querySelector('.precio').textContent,

        id: elemento.querySelector('a').getAttribute('data-id')

      };

      insertarCarrito(infoElemento);

    }

 

    function insertarCarrito(elemento) {

      const row = document.createElement('tr');

      row.innerHTML = `

        <td>

          <img src="${elemento.imagen}" width=100>

        </td>

        <td>

          ${elemento.titulo}

        </td>

        <td>

          ${elemento.precio}

        </td>

        <td>

          <a href="#" class="borrar" data-id="${elemento.id}">X</a>

        </td>

      `;

      lista.appendChild(row);

    }

 

    function vaciarcarrito() {

      while (lista.firstChild) {

        lista.removeChild(lista.firstChild);

      }

      return false;

    }

  });
