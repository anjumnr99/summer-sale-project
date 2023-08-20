
document.getElementById('first-card').addEventListener('click', function(){
    showOutput('first-card');
})

document.getElementById('second-card').addEventListener('click', function(){
    showOutput('second-card');

})

document.getElementById('third-card').addEventListener('click', function(){
    showOutput('third-card');
})
document.getElementById('forth-card').addEventListener('click', function(){
    showOutput('forth-card');

})
document.getElementById('fifth-card').addEventListener('click', function(){
    showOutput('fifth-card');
    
})
document.getElementById('sixth-card').addEventListener('click', function(){
    showOutput('sixth-card');
})
document.getElementById('seventh-card').addEventListener('click', function(){
    showOutput('seventh-card');

})
document.getElementById('eighth-card').addEventListener('click', function(){
    showOutput('eighth-card');
})
document.getElementById('ninth-card').addEventListener('click', function(){
    showOutput('ninth-card');
})

   

document.getElementById('coupon-code').addEventListener('keyup', function (event) {
    const code = event.target.value;
    const applyBtn = document.getElementById('apply-btn');
    const totalPrice = getTotalPrice();
    
    if ((code === 'SELL200') && (totalPrice >= 200)) {
        applyBtn.removeAttribute('disabled');

        applyBtn.addEventListener('click', function(){
            const discountPrice = (totalPrice * 0.20).toFixed(2);
            // const discount = discountPrice.toFixed(2);
            const totalAmount = (totalPrice - discountPrice).toFixed(2);
            setAmount('discount-field', discountPrice);
            setAmount('total-field', totalAmount);

        })
        
    } else {
        applyBtn.setAttribute('disabled', true);
    }

})


