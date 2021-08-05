function handleProduct(isIncrise, product){
    const input = document.getElementById(product + '-input');
    const inputNum = parseInt(input.value);
    let totalProduct = inputNum;
    if (isIncrise === true){
        totalProduct = inputNum + 1;
    }
    if (isIncrise === false && totalProduct > 0){
        totalProduct = inputNum - 1;
    }

    document.getElementById(product + '-input').value = totalProduct;

    let totalPrice = 0;

    if (product === 'phn'){
        totalPrice = 1399 * totalProduct;
    }
    if (product === 'case'){
        totalPrice = 75 * totalProduct;
    }
    
    document.getElementById(product + '-price').innerText = totalPrice;

    FullPrice();
}


function FullPrice(){
    const totalPhonePrice = document.getElementById('phn-price').innerText;
    const totalPhonePriceNumber = parseInt(totalPhonePrice);

    const totalCaseingPrice = document.getElementById('case-price').innerText;
    const totalCaseingPriceNumber = parseInt(totalCaseingPrice);

    const total =  totalPhonePriceNumber + totalCaseingPriceNumber;
    document.getElementById('total').innerText = total;

    const tax = Math.floor(total * 0.1); //10% tax rate
    document.getElementById('tax-amount').innerText = tax;

    const subtotal = total + tax;
    document.getElementById('grand-total').innerText = subtotal;
}