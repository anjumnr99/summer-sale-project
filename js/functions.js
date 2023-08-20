function showOutput(cardId){
    const text = getTextValue(cardId);
    setTextValue(text);

    const makePurchaseBtn = document.getElementById('purchase-btn');
    
    makePurchaseBtn.removeAttribute('disabled');
    
    const number = getNumberValue(cardId);
    countTotalPrice(number);



}

function setTextValue(textValue){

    const inputText = document.getElementById('input-text');
    const count = inputText.childElementCount;
    let p = document.createElement('p');
    p.innerHTML = `${count+1}. ${textValue}`;
    inputText.appendChild(p) ;

}

function getTextValue(fieldId){
    const parent = document.getElementById(fieldId);
    const text = parent.children[1].children[1].textContent;
    return text;
}

// function getCouponCode(){
//     const inputField = document.getElementById('coupon-code');
//     const inputText = inputField.value ;
//     return inputText; 
// }

function getNumberValue(fieldId){
    const parent = document.getElementById(fieldId);
    const numberString = parent.children[1].children[2].textContent;
    const numberArray = numberString.split(' ');
    const numberFloat = parseFloat(numberArray[0]);

    const number = numberFloat;
     return number;
}

function getTotalPrice(){
    
    const totalPriceField = document.getElementById('total-price');
    const totalPriceString = totalPriceField.innerText;
    const totalPriceValue = parseFloat(totalPriceString);
    
    return totalPriceValue;
}

function countTotalPrice(price){
    let totalPrice = getTotalPrice();
    
    totalPrice = totalPrice + price;
    const totalPriceFloat = totalPrice.toFixed(2);
    setTotalPrice(totalPriceFloat);
}

function setTotalPrice(totalPrice){
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = totalPrice;
}

function setAmount(fieldId, setValue){
    const textField = document.getElementById(fieldId);
     textField.innerText = setValue;

}