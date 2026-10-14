document.addEventListener('DOMContentLoaded', function(){
    let mylogo = document.querySelector("#logo");
    mylogo.style.position = 'absolute';
    mylogo.style.left = '50%';

    mylogo.addEventListener('mouseenter', function(){
        mylogo.style.transform = 'translateX(-50%) scale(1.2)';

    })
    mylogo.addEventListener('mouseleave', function(){
        mylogo.style.transform = 'translateX(-50%) scale(1)';
    })
})
