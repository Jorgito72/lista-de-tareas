

const input = document.querySelector('input');
const btnAdd = document.getElementById('button-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

// Definimos un array vacío para almacenar las tareas
var tareas = [];

// Seleccionamos el formulario y el botón
var formulario = document.getElementById("miFormulario");
var botonAgregar = document.getElementById("button-add");

// Agregamos un evento al botón para que guarde la tarea en el array
botonAgregar.addEventListener("click", function() {
  // Obtenemos el valor del campo de texto
  var nuevaTarea = formulario.querySelector("input").value;

  

  // Agregamos la tarea al array si no está vacía
  if (nuevaTarea.trim() !== "") {
    tareas.push(nuevaTarea);
    console.log("Tarea agregada:", nuevaTarea);
  }

  for (var i = 0; i < tareas.length; i++) {
    var tarea = tareas[i];
    }

    const li = document.createElement('li');
    const p = document.createElement('p');

   
         p.textContent = tarea;
         li.appendChild(addDeleteBtn());
         li.appendChild(p);
         li.className = "list-group-item"
         ul.appendChild(li);

         input.value = "";

        empty.style.display = "none";

        console.log(tareas);
    



  // Limpiamos el campo de texto
  formulario.querySelector("input").value = "";
});

//agregamos en evento al activar tecla enter

function pulsar(e) {
         if (e.keyCode === 13) {
            // Aquí va el código que se ejecutará cuando se presione la tecla Enter
            var nuevaTarea = formulario.querySelector("input").value;


            console.log("tecla enter funka");
            // Agregamos la tarea al array si no está vacía
            if (nuevaTarea.trim() !== "") {
                tareas.push(nuevaTarea);
                console.log("Tarea agregada:", nuevaTarea);
            

            for (var i = 0; i < tareas.length; i++) {
                var tarea = tareas[i];
               }
                const li = document.createElement('li');
                const p = document.createElement('p');
         

                // if (nuevaTarea !== "") {
                    p.textContent = tarea;
                    li.appendChild(addDeleteBtn());
                    li.appendChild(p);
                    li.className = "list-group-item";
                    ul.appendChild(li);

                    input.value = "";

                    empty.style.display = "none";

                    console.log(tareas);
                // }
            }


            // Limpiamos el campo de texto
            formulario.querySelector("input").value = "";
        }
      }
    ;

 

// btnAdd.addEventListener('click', (e) => {

//     const textTarea = input.value;
//     

    

//     if (textTarea !== "") {
//          p.textContent = textTarea;
        

//         
        
//     }
// })
function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-Delete";
    
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        tareas.pop(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });
    return deleteBtn;

 }
