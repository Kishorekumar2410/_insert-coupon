function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity='0.7'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity='1'
}
function copy(){
    var copytxt = document.getElementById('coup');

    copytxt.select();

    navigator.clipboard.writeText(copytxt.value);

    alert("Coupon code copied");
}