function calculateTotal() {
    const customerName = document.getElementById("customerName").value;
    const customerPhone = document.getElementById("customerPhone").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerPickup = document.getElementById("customerPickup").value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;

    const tradicional450ml = parseInt(document.getElementById("tradicional450ml").value) || 0;
    const tradicional950ml = parseInt(document.getElementById("tradicional950ml").value) || 0;
    const Rabano450ml = parseInt(document.getElementById("Rabano450ml").value) || 0;
    const Rabano950ml = parseInt(document.getElementById("Rabano950ml").value) || 0;
    const Cebollin450ml = parseInt(document.getElementById("Cebollin450ml").value) || 0;
    const Cebollin950ml = parseInt(document.getElementById("Cebollin950ml").value) || 0;

    const totalTradicional = (tradicional450ml * 130) + (tradicional950ml * 240);
    const totalRabano = (Rabano450ml * 130) + (Rabano950ml * 240);
    const totalCebollin = (Cebollin450ml * 130) + (Cebollin950ml * 240);

    const totalPrice = totalTradicional + totalRabano + totalCebollin;

    let shippingCost = 30;
    if (totalPrice >= 500) {
        shippingCost = 0;
    }

    const finalPrice = totalPrice + shippingCost;

    document.getElementById("totalPrice").textContent = `Total: ${finalPrice} Pesos (Envío: ${shippingCost} Pesos)`;

    const whatsappMessage = `¡Hola! Quiero hacer un pedido de kimchi. \n\n` +
                            `Nombre: ${customerName} \n` +
                            `Número de Teléfono: ${customerPhone} \n` +
                            `Dirección: ${customerAddress} \n` +
                            `Recojo en persona: ${customerPickup} \n` +
                            `Método de pago: ${paymentMethod} \n\n` +
                            `Kimchi Tradicional (450ml): ${tradicional450ml} piezas - ${totalTradicional} Pesos \n` +
                            `Kimchi Tradicional (950ml): ${tradicional950ml} piezas - ${totalTradicional} Pesos \n` +
                            `Kimchi Rabano (450ml): ${Rabano450ml} piezas - ${totalRabano} Pesos \n` +
                            `Kimchi Rabano (950ml): ${Rabano950ml} piezas - ${totalRabano} Pesos \n` +
                            `Kimchi Cebollin (450ml): ${Cebollin450ml} piezas - ${totalCebollin} Pesos \n` +
                            `Kimchi Cebollin (950ml): ${Cebollin950ml} piezas - ${totalCebollin} Pesos \n\n` +
                            `Total: ${finalPrice} Pesos`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/4421174719?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
}