const users = [
    {user: "Erik", pass: "12345", saldo: 10},
    {user: "Sara", pass: "hola", saldo: 500},
    {user: "Mary", pass: "contraseña", saldo: 20},
    {user: "Juan", pass: "11111", saldo: 990},
]

const formsDiv = document.querySelector("#forms")
const userName = document.querySelector("#username") // user.name
const userPass = document.querySelector("#password") // user.password
const btnSubmit = document.querySelector("#btn-login")
const errorLogin = document.querySelector("#error-login")

const optionsDiv = document.querySelector("#options")
const divConsultar = document.querySelector("#div-consultar")
const montoCashin = document.querySelector("#monto-consulta-ingresar")
const montoCashout = document.querySelector("#monto-consulta-retirar")
const cashin = document.querySelector("#cantidad-ingreso")
const cashout = document.querySelector("#cantidad-retiro")
const btnConsultar = document.querySelector("#btn-consultar")
const btnIngresar = document.querySelector("#btn-ingresar")
const btnRetirar = document.querySelector("#btn-retirar")
const errorIngreso = document.querySelector("#error-ingreso")
const errorRetiro = document.querySelector("#error-retiro")

function inicioSesion(){
    for (let i = 0; i < users.length; i++){
        if (userName.value === users[i].user && password.value === users[i].pass) {
            // window.location.href = "../Cajero Automático/index.html"
            formsDiv.style.display = "none";

            optionsDiv.style.display = "block";
            btnConsultar.addEventListener("click", function(){consultar(i)})
            montoCashin.innerText = "$" + users[i].saldo;
            montoCashout.innerText = "$" + users[i].saldo;

            btnIngresar.addEventListener("click", function(){ingresar(i)})
            btnRetirar.addEventListener("click", function(){retirar(i)})
            return true
        } else {
            // console.log("Credenciales inválidas")
            // mensaje.textContent = "Credenciales incorrectas";
            // mensaje.classList.add("error")
            // mensaje.classList.remove("success")
            errorLogin.style.display = "block";
        }
    }
    return false
}

function consultar(i){
    divConsultar.innerText = "Saldo Actual: $" + users[i].saldo;
    montoCashin.innerText = "$" + users[i].saldo;
    montoCashout.innerText = "$" + users[i].saldo;
}

function ingresar(i){
    if ((users[i].saldo + Number(cashin.value)) > 990){
        errorIngreso.style.display = "block";
    } else {
        users[i].saldo += Number(cashin.value);
        errorIngreso.style.display = "none";
    }
    consultar(i);
}

function retirar(i){
    if ((users[i].saldo - Number(cashout.value)) < 10) {
        errorRetiro.style.display = "block";
    } else {
        users[i].saldo -= Number(cashout.value);
        errorRetiro.style.display = "none";
    }
    consultar(i);
}

btnSubmit.addEventListener("click", inicioSesion)

// Código hecho por: Patricio Hernández