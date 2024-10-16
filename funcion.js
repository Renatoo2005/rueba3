function calcularSalario(){
    
let apellido= document.getElementById("apellido").value;
let salarioBase = parseFloat(document.getElementById("salarioBase").value);
let dias = parseFloat(document.getElementById("dias").value);
let importe = (salarioBase / 30) * dias;

let bonificacion = parseFloat(document.getElementById("bonificacion").value);
let bonificacion2 = parseFloat(document.getElementById("bonificacion2").value);

let porcentajeBon1 = (bonificacion / 100) * salarioBase;
let porcentajeBon2 = (bonificacion2 / 100) * salarioBase;

let tiempoExtra = parseFloat(document.getElementById("tiempoExtra").value);
let sobretiempo = ((salarioBase / 30) / 8) * 1.5 * tiempoExtra;

let total = importe + porcentajeBon1 + porcentajeBon2 + sobretiempo;

document.getElementById("apellidoo").textContent = apellido;
    document.getElementById("salarioTotal").textContent = `$${total.toFixed(2)}`;
}
