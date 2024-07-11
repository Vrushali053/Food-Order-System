function submitOrder(event) {
    event.preventDefault();
    const form = document.getElementById('order-form');
    const name = form.name.value;
    const address = form.address.value;
    const item = form.item.value;
    const quantity = form.quantity.value;

    const confirmationMessage = Thank you , ${name}! Your order for ${quantity} ${item}(s) will be delivered to ${address} soon.;
    document.getElementById('order-confirmation').innerText = confirmationMessage;

    form.reset();
}