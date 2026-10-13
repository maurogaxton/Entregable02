//simulador de pago con tarjeta
let pagar = true

while(pagar) {
    let importe = parseFloat(prompt("Ingrese el importe de la compra"))
    let menu = parseInt(prompt("Ingrese una opción de pago: 1 VISA, 2 MASTERCARD, 3 AMERICAN EXPRESS, 4 MERCADOPAGO o 5 EFECTIVO"))

    switch(menu) {
        case 1:
            let importeFinal = importe * 0.8
            alert("Su pago con VISA tiene un 20% de descuento, por su compra de $ " + importe + " abonara $ " + importeFinal )
            break
        case 2:
            alert("Limite de deposito: $80.000")
            break
        case 3:
            alert("Limite de extraccion: $100.000")
            break
        case 4:
            alert("Limite de extraccion: $100.000")
            break
        case 5:
            alert("Limite de extraccion: $100.000")
            break

        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otro pago? (si/no)").toLowerCase()
    if(confirmacion == "no"){
        pagar = false
        alert("Gracias por su compra!")
    }
  }