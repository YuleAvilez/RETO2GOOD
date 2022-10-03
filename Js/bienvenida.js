
const Adivinanza = document.querySelector(".btnAdivinanza");
const CerrarSesion = document.querySelector(".btnCerrarSesion");

var min = 0;
var max = 10;

var numAleatorio = Math.floor(Math.random() * max - min + 1) + min;
var intentos = 0;
var numero;



Adivinanza.addEventListener("click", function (e) {
    e.preventDefault();
    mostrarAdivinanza()
})
const mostrarAdivinanza = () => {

    const adivinanza = document.querySelector(".botonAdivinanza");

    adivinanza.innerHTML = `
            <form class="contenedor3" id="contenedor3">
                <h1>ADIVINA EL NUMERO DEL 0 AL 10</h1>
                
                <div class="form-adivinanza">
                    <div id="adivinanzas"></div>
                    <input type="number" placeholder="Respuesta" id="respuesta">
                </div>
                
                <button class="btn3">Probar</button>
            </form> 
    `
    const probar = document.querySelector(".btn3")

    probar.addEventListener("click", function (e) {
        e.preventDefault();
        numero = document.querySelector("#respuesta").value;

        if (numero >= min && numero <= max) {
            if (numero < numAleatorio) {
                intentos = intentos + 1
                swal.fire({
                    icon: 'error',
                    title: ("Estas por debajo"),
                    background: "#b4a7d6",
                })

            } else if (numero > numAleatorio) {
                intentos = intentos + 1
                swal.fire({
                    icon: 'error',
                    title: ("Te pasaste"),
                    background: "#b4a7d6",
                })
            }

        } else {
            swal.fire({
                icon: 'error',
                title: ("estas fuera del intervalo"),
                background: "#b4a7d6",
            })
        }
        if (numero == numAleatorio) {
            Swal.fire({
                title: "Felicidades! adivinaste el numero en " + (intentos + 1) + " intentos",
                text: "¿Desea realizar otra adivinanza?",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                background: "#b4a7d6",
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload()
                } else {
                    if (confirm("¿Desea cerrar sesión?")) {

                        swal.fire({
                            icon: 'success',
                            title: ("Adios señor usuario, vuelva pronto"),
                            background: "#b4a7d6",
                        })
                        setTimeout(() => {
                            window.location.href = "./index.html";
                        }, 2000);
                    }
                }

            })

        }
    })
}



CerrarSesion.addEventListener("click", function (e) {
    e.preventDefault();

    if (confirm("¿Estas seguro que quieres cerrar sesión?")) {

        swal.fire({
            icon: 'success',
            title: ("Adios señor usuario, vuelva pronto"),
            background: "#b4a7d6",
        })
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 2000);
    }


})

